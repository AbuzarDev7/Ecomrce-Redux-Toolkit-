import React from "react";
import {
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

export default function Contact() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={10}
          sx={{
            borderRadius: 5,
            overflow: "hidden",
            animation: "fade 1s ease",
            "@keyframes fade": {
              from: { opacity: 0, transform: "scale(0.95)" },
              to: { opacity: 1, transform: "scale(1)" },
            },
          }}
        >
          <Grid container>
          
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                bgcolor: "#111827",
                color: "white",
                p: 5,
              }}
            >
              <Typography variant="h4" fontWeight="bold" mb={2}>
                Get in Touch
              </Typography>

              <Typography sx={{ opacity: 0.8, mb: 4 }}>
                Have a project in mind or need help?  
                Feel free to contact us anytime.
              </Typography>

              <Box display="flex" alignItems="center" mb={3}>
                <EmailRoundedIcon sx={{ mr: 2 }} />
                <Typography>contact@example.com</Typography>
              </Box>

              <Box display="flex" alignItems="center" mb={3}>
                <PhoneRoundedIcon sx={{ mr: 2 }} />
                <Typography>+92 300 1234567</Typography>
              </Box>

              <Box display="flex" alignItems="center">
                <LocationOnRoundedIcon sx={{ mr: 2 }} />
                <Typography>Pakistan</Typography>
              </Box>
            </Grid>

            {/* RIGHT FORM */}
            <Grid item xs={12} md={7} sx={{ p: 5 }}>
              <Typography
                variant="h5"
                fontWeight="bold"
                mb={3}
              >
                Send a Message
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Full Name"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    label="Email"
                    type="email"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Subject"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    fullWidth
                    size="large"
                    variant="contained"
                    endIcon={<SendRoundedIcon />}
                    sx={{
                      py: 1.6,
                      borderRadius: 3,
                      textTransform: "none",
                      fontSize: "1rem",
                      bgcolor: "#111827",
                      transition: "0.3s",
                      "&:hover": {
                        bgcolor: "#1f2937",
                        transform: "translateY(-2px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
