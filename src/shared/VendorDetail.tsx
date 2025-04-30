import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Avatar,
  Tabs,
  Tab,
  TextField,
  Button,
  Rating,
  Chip,
  Divider,
  CardMedia,
  Link,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
} from '@mui/material';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import SearchIcon from '@mui/icons-material/Search';

const images = [
  "/Images/VendorGallery1.png",
  "/Images/VendorGallery2.png",
  "/Images/VendorGallery3.png",
  "/Images/VendorGallery4.png",
];

const amenities = [
  { label: 'Covered Outdoors Space', value: true },
  { label: 'Handicap Accessible', value: true },
  { label: 'Liability Insurance', value: true },
  { label: 'Reception Area', value: true },
  { label: 'Wireless Internet', value: true },
  { label: 'Dressing Room', value: true },
  { label: 'Indoor Event Space', value: true },
  { label: 'Outdoor Event Space', value: true },
  { label: 'On-Site Accommodations', value: false },
];

const reviews = [1, 1, 93, 1, 1];

export default function VendorDetailPage() {
  return (
    <Box p={3} bgcolor="#fafafa">
      {/* Header */}
      <Box display="flex" alignItems="center" mb={2}>
        <img src="/images/logo.png" alt="logo" width={30} style={{ marginRight: 8 }} />
        <Typography variant="subtitle2" color="text.secondary">
          Photographers - Kigali - Kicukiro
        </Typography>
      </Box>

      {/* Gallery */}
      <Grid container spacing={1} mb={2}>
        {images.map((src, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Box position="relative">
              <CardMedia component="img" image={src} sx={{ borderRadius: 1 }} />
              {index === 3 && (
                <Box
                  position="absolute"
                  bottom={8}
                  right={8}
                  bgcolor="white"
                  px={1}
                  py={0.5}
                  borderRadius={1}
                  display="flex"
                  alignItems="center"
                  fontSize={12}
                >
                  <PhotoCameraBackIcon fontSize="small" style={{ marginRight: 4 }} />
                  View more in Album
                </Box>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Tabs */}
      <Tabs value={0} textColor="primary" indicatorColor="primary" variant="scrollable">
        {['Photos', 'About', 'Amenities', 'Pricing', 'Reviews', 'Contact', 'Team'].map((tab) => (
          <Tab key={tab} label={tab} />
        ))}
      </Tabs>

      <Grid container spacing={3} mt={2}>
        {/* Left side content */}
        <Grid item xs={12} md={8}>
          <Typography variant="h5" fontWeight="bold">
            Alpha Photo
          </Typography>
          <Box display="flex" alignItems="center" mt={0.5}>
            <Rating value={3} readOnly size="small" />
            <Typography variant="body2" ml={1}>(23)</Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" mt={0.5}>
            KK 990, Kicukiro Kigali<br />
            <Link href="#">Instagram Website</Link> +250 788000000
          </Typography>

          <Box mt={3}>
            <Typography variant="h6" fontWeight="bold">About</Typography>
            <Typography variant="body2" mt={1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat egestas bibendum...
            </Typography>
          </Box>

          {/* Amenities and details */}
          <Box mt={4}>
            <Typography variant="h6" fontWeight="bold">Amenities and details</Typography>
            <Grid container spacing={1} mt={1}>
              {amenities.map((a, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Typography variant="body2">
                    {a.value ? '✓' : '✗'} {a.label}
                  </Typography>
                </Grid>
              ))}
            </Grid>
            <Box mt={2}>
              <Typography variant="body2"><b>Guest capacity:</b> Up to 200</Typography>
              <Typography variant="body2"><b>Settings:</b> Ballroom, Garden, Historic Venue, Park, Tented</Typography>
              <Typography variant="body2"><b>Venue services Offerings:</b> Bar & Drinks, Food & Catering, Planning, Service Staff</Typography>
            </Box>
          </Box>

          {/* Pricing */}
          <Box mt={4}>
            <Typography variant="h6" fontWeight="bold">Pricing</Typography>
            <Link href="#">Ask for pricing</Link>
          </Box>

          {/* Reviews */}
          <Box mt={4}>
            <Typography variant="h6" fontWeight="bold">Reviews</Typography>
            <Rating value={3} readOnly />
            <Typography variant="body2">3.0 out of 5</Typography>
            <Typography variant="caption">1,952 Reviews</Typography>
            <Button variant="outlined" fullWidth sx={{ mt: 1 }}>Write a Review</Button>
            <Box mt={2}>
              {reviews.map((val, i) => (
                <Box display="flex" alignItems="center" key={i}>
                  <Typography width={60}>{5 - i} star</Typography>
                  <Box flex={1} height={8} bgcolor="#ddd" mx={1}>
                    <Box width={`${val}%`} height="100%" bgcolor="#364A71" />
                  </Box>
                  <Typography>{val}%</Typography>
                </Box>
              ))}
            </Box>
            <Box mt={2} display="flex" gap={2}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Button variant="outlined" size="small" key={star}>{star} Star</Button>
              ))}
            </Box>
            <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
              <TextField
                placeholder="Search review"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
              <Select size="small" defaultValue="Top reviews">
                <MenuItem value="Top reviews">Top reviews</MenuItem>
                <MenuItem value="Most recent">Most recent</MenuItem>
              </Select>
            </Box>

            {/* Sample Reviews */}
            {[1, 2, 3].map((_, index) => (
              <Box mt={3} key={index}>
                <Rating value={3} readOnly size="small" />
                <Typography variant="caption">Reviewed On 4/22/2024 by John Doe</Typography>
                <Typography variant="body2" mt={1}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat egestas bibendum...
                </Typography>
                <Link href="#">Read More</Link>
              </Box>
            ))}
            <Button variant="outlined" sx={{ mt: 2 }}>View More</Button>
          </Box>

          {/* Contact Info */}
          <Box mt={4}>
            <Typography variant="h6" fontWeight="bold">Contact info</Typography>
            <Typography variant="body2" mt={1}>KK 990, Kicukiro Kigali</Typography>
            <Link href="#">Instagram Website</Link> +250 788000000
          </Box>

          {/* Team */}
          <Box mt={4}>
            <Typography variant="h6" fontWeight="bold">Meet our Team</Typography>
            <Box display="flex" alignItems="center" mt={1}>
              <Avatar src="/images/avatar.jpg" sx={{ mr: 2 }} />
              <Box>
                <Typography fontWeight="bold">John Doe</Typography>
                <Typography variant="body2">Photographer / Videographer</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Right quote form */}
        <Grid item xs={12} md={4}>
          <Box bgcolor="white" p={2} borderRadius={2} boxShadow={1}>
            <Typography variant="h6" fontWeight="bold" mb={2}>Place Quote</Typography>
            <Grid container spacing={1}>
              <Grid item xs={6}><TextField label="First name" fullWidth size="small" /></Grid>
              <Grid item xs={6}><TextField label="Last name" fullWidth size="small" /></Grid>
              <Grid item xs={12}><TextField label="Email" fullWidth size="small" /></Grid>
              <Grid item xs={12}><TextField label="Wedding date" fullWidth size="small" /></Grid>
              <Grid item xs={12}><TextField label="Number of guests" fullWidth size="small" /></Grid>
              <Grid item xs={12}><TextField label="Phone number" fullWidth size="small" /></Grid>
              <Grid item xs={12}><TextField label="Additional note" fullWidth multiline rows={3} size="small" /></Grid>
            </Grid>
            <Button fullWidth variant="contained" sx={{ mt: 2, bgcolor: '#D5AC44', color: '#fff' }}>
              Request Quote
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
