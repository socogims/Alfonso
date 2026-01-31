import { useEffect, useState, useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Document, Page, pdfjs } from "react-pdf";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

pdfjs.GlobalWorkerOptions.workerSrc =
  "https://cdn.jsdelivr.net/npm/pdfjs-dist@5.4.296/build/pdf.worker.min.mjs";

export default function CateringPDFSection() {
  const containerRef = useRef(null);
  const [numPages, setNumPages] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState({ width: 0, height: 0 });

  const A4_RATIO = 1 / 1.414;

  useEffect(() => {
    function updateSize() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const styles = window.getComputedStyle(containerRef.current);
      const paddingX =
        parseFloat(styles.paddingLeft || "0") + parseFloat(styles.paddingRight || "0");
      const paddingY =
        parseFloat(styles.paddingTop || "0") + parseFloat(styles.paddingBottom || "0");

      setPageSize({
        width: rect.width - paddingX,
        height: rect.height - paddingY,
      });
    }

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const useHeight = pageSize.height * A4_RATIO <= pageSize.width;

  return (
    <Box
      component="section"
      id="catering"
      sx={{
        width: "100%",
        minHeight: { xs: "90vh", md: "100vh" },
        background: "radial-gradient(circle at top, rgba(122,31,27,0.12) 0%, #0b0a09 60%)",
        py: { xs: 8, md: 12 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        ref={containerRef}
        sx={{
          width: "100%",
          maxWidth: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "rgba(21,17,15,0.9)",
          borderRadius: 4,
          boxShadow: "0 30px 80px rgba(0,0,0,0.7)",
          p: { xs: 2, md: 3 },
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Typography
          variant="h2"
          sx={{ color: "#fff", fontWeight: 800, mb: 3, textAlign: "center" }}
        >
          Unser <Box component="span" sx={{ color: "primary.main" }}>Catering-Angebot</Box>
        </Typography>

        {numPages > 1 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              mb: 1,
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              sx={{
                color: "#fff",
                "&:hover": { backgroundColor: "primary.main" },
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
              Seite {page} von {numPages}
            </Typography>
            <IconButton
              onClick={() => setPage((p) => Math.min(p + 1, numPages))}
              sx={{
                color: "#fff",
                "&:hover": { backgroundColor: "primary.main" },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        )}

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Document
            file="/catering.pdf"
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={<Typography sx={{ color: "#fff" }}>PDF wird geladen…</Typography>}
          >
            {pageSize.width > 0 && pageSize.height > 0 && (
              <Page
                pageNumber={page}
                {...(useHeight ? { height: pageSize.height } : { width: pageSize.width })}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            )}
          </Document>
        </Box>
      </Box>
    </Box>
  );
}
