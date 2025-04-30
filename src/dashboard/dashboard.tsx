import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Avatar,
  Rating,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const vendorCategories = ["Photographers", "DJs", "Beauty", "Planners", "Florists", "Caterer"];

const Dashboard = () => {
  const [vendorTab, setVendorTab] = useState("Photographers");
  const [venues, setVenues] = useState<{ name: string; location: string; rating: number; reviews: number; image: string }[]>([]);
  const [vendors, setVendors] = useState({});

  const venueScrollRef = useRef(null);
  const vendorScrollRef = useRef(null);

  useEffect(() => {
    // Simulated data fetch
    setTimeout(() => {
      const fetchedVenues = Array(15).fill({
        name: "City Valley Motel",
        location: "Kigali, Nyarugenge",
        rating: 3.0,
        reviews: 1952,
        image: "Images/vendor.png",
      });

      const fetchedVendors = vendorCategories.reduce((acc, category) => {
        acc[category] = Array(15).fill({
          name: `${category} Sample Vendor`,
          location: "Kigali, Rwanda",
          rating: 4.5,
          reviews: 150,
          image: "Images/vendor.png",
        });
        return acc;
      }, {});

      setVenues(fetchedVenues);
      setVendors(fetchedVendors);
    }, 500);
  }, []);

  const scroll = (ref, direction) => {
    if (ref.current) {
      ref.current.scrollBy({ left: direction * 300, behavior: "smooth" });
    }
  };

  const renderCard = (item) => (
    <Card
      sx={{ minWidth: 250, flexShrink: 0, borderRadius: 2, position: "relative" }}
    >
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.name}
        onClick={() => window.location.href = "/VendorDetail"}
        sx={{ cursor: "pointer" }}
      />
      <IconButton
        sx={{ position: "absolute", top: 8, right: 8, backgroundColor: "white", zIndex: 1 }}
      >
        <FavoriteBorderIcon />
      </IconButton>
      <CardContent sx={{ pt: 1 }}>
        <Typography variant="subtitle1" fontWeight="bold" color="#1B2A52">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.location}
        </Typography>
        <Box display="flex" alignItems="center" gap={1} mt={1}>
          <Rating value={item.rating} precision={0.5} readOnly size="small" />
          <Typography variant="body2" color="text.secondary">
            {item.rating.toFixed(1)} ({item.reviews.toLocaleString()})
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box p={3}>
      {/* Header section */}
      <Box
        mb={3}
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#fff",
          p: 2,
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Avatar
          src="Images/couple.jpg"
          alt="John & Jane"
          sx={{ width: 80, height: 80, mr: 3 }}
        />
        <Box>
          <Typography variant="body2" fontWeight="medium" color="text.secondary">
            Good morning and welcome back
          </Typography>
          <Typography variant="h4" fontWeight="bold" color="#1B2A52">
            John & Jane
          </Typography>
          <Box mt={1} display="flex" flexWrap="wrap" gap={2}>
            <Typography color="#D4A216" fontSize={14}>📅 Add a wedding date</Typography>
            <Typography color="#D4A216" fontSize={14}>📍 Add a wedding location</Typography>
            <Typography color="#D4A216" fontSize={14}>🕶️ Add wedding style</Typography>
          </Box>
        </Box>
      </Box>

      {/* Reception venues */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="h6" fontWeight="bold" color="#1B2A52">Reception venues</Typography>
        <Box>
          <IconButton onClick={() => scroll(venueScrollRef, -1)} sx={{ backgroundColor: '#ccc', mr: 1 }}>
            <ArrowBackIosIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={() => scroll(venueScrollRef, 1)} sx={{ backgroundColor: '#D4A216' }}>
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      <Box ref={venueScrollRef} sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2 }}>
        {venues.map((venue, index) => renderCard(venue))}
      </Box>

      {/* Vendors */}
      <Box mt={5}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" fontWeight="bold" color="#1B2A52">Vendors</Typography>
          <Box>
            <IconButton onClick={() => scroll(vendorScrollRef, -1)} sx={{ backgroundColor: '#ccc', mr: 1 }}>
              <ArrowBackIosIcon fontSize="small" />
            </IconButton>
            <IconButton onClick={() => scroll(vendorScrollRef, 1)} sx={{ backgroundColor: '#D4A216' }}>
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        <Box display="flex" gap={1} mb={2}>
          {vendorCategories.map((category) => (
            <Button
              key={category}
              variant={vendorTab === category ? "contained" : "outlined"}
              onClick={() => setVendorTab(category)}
              sx={{
                borderRadius: 5,
                backgroundColor: vendorTab === category ? "#D4A216" : "transparent",
                color: vendorTab === category ? "white" : "#1B2A52",
                borderColor: "#D4A216",
                textTransform: "none",
              }}
            >
              {category}
            </Button>
          ))}
        </Box>

        <Box ref={vendorScrollRef} sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2 }}>
          {(vendors[vendorTab] || []).map((vendor, index) => renderCard(vendor))}
        </Box>
      </Box>

      {/* Manage vendors */}
      <Box mt={5}>
        <Typography variant="h6" fontWeight="bold" mb={2}>Manage vendors</Typography>
        <Box display="flex" gap={2} flexWrap="wrap">
          {vendorCategories.map((category) => (
            <Box
              key={category}
              sx={{
                height: 100,
                width: 150,
                borderRadius: 2,
                backgroundColor: "#2D2D2D",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                backgroundImage: `url(Images/${category.toLowerCase()}.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "grayscale(100%)",
              }}
            >
              {category}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;