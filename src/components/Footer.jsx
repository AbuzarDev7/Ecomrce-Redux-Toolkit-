import React from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
        color: 'white',
        py: 6, 
        mt: 5,
        fontFamily: 'Roboto, sans-serif',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.1)'
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 3
        }}
      >
        {/* Logo and copyright */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 1.5,
            minWidth: { xs: '100%', sm: 'auto' }
          }}
        >
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1.5,
              '&:hover img': {
                transform: 'rotate(360deg)',
                transition: 'transform 0.6s ease'
              }
            }}
          >
            <img 
              src="https://mui.com/static/logo.png" 
              alt="MUI Logo" 
              style={{ 
                height: 35, 
                filter: 'brightness(0) invert(1)',
                transition: 'transform 0.6s ease'
              }} 
            />
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700,
                letterSpacing: '.05rem'
              }}
            >
              MUI Store
            </Typography>
          </Box>
          <Typography 
            variant="body2" 
            sx={{ 
              opacity: 0.9,
              fontSize: '0.9rem'
            }}
          >
            © 2025 MUI Store. All rights reserved.
          </Typography>
        </Box>

        {/* Navigation links */}
        <Box 
          sx={{ 
            display: 'flex', 
            gap: { xs: 2, sm: 3 }, 
            mt: { xs: 2, md: 0 },
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', md: 'flex-start' }
          }}
        >
          {['Home', 'Products', 'About', 'Contact'].map((link) => (
            <Typography 
              key={link}
              sx={{ 
                cursor: 'pointer',
                fontWeight: 500,
                position: 'relative',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  color: '#90caf9',
                  transform: 'translateY(-3px)'
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -5,
                  left: 0,
                  width: 0,
                  height: '2px',
                  backgroundColor: '#90caf9',
                  transition: 'width 0.3s ease'
                },
                '&:hover::after': {
                  width: '100%'
                }
              }}
            >
              {link}
            </Typography>
          ))}
        </Box>

        {/* Social links */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: { xs: 'center', md: 'flex-end' }, 
            mt: { xs: 2, md: 0 },
            gap: 1.5
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              fontWeight: 600,
              fontSize: '0.95rem'
            }}
          >
            Follow us:
          </Typography>
          <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
            {[
              { icon: <Facebook />, url: 'https://www.facebook.com', color: '#1877f2' },
              { icon: <Twitter />, url: 'https://twitter.com', color: '#1da1f2' },
              { icon: <Instagram />, url: 'https://www.instagram.com', color: '#e4405f' },
              { icon: <LinkedIn />, url: 'https://www.linkedin.com', color: '#0077b5' }
            ].map((social, index) => (
              <IconButton
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  padding: '8px',
                  '&:hover': {
                    backgroundColor: social.color,
                    transform: 'translateY(-5px) rotate(360deg)',
                    boxShadow: `0 8px 20px ${social.color}60`
                  },
                  transition: 'all 0.4s ease'
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;