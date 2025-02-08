import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=> {
    return (
        <div className="header-container">
            <div className="logo">
                <img src="data:image/png;base64,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" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const resList = [
    
        {
          "info": {
            "id": "10576",
            "name": "Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
            "locality": "6th Block",
            "areaName": "Koramangala",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Pizzas"
            ],
            "avgRating": 4.3,
            "parentId": "721",
            "avgRatingString": "4.3",
            "totalRatingsString": "21K+",
            "sla": {
              "deliveryTime": 46,
              "lastMileTravel": 0.9,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "0.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-02-09 04:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹99"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.6",
                "ratingCount": "3.3K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7b8ec0e1-6099-4867-9050-986de783664f"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/bangalore/pizza-hut-6th-block-koramangala-rest10576",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "5934",
            "name": "Burger King",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Burgers",
              "American"
            ],
            "avgRating": 4.3,
            "parentId": "166",
            "avgRatingString": "4.3",
            "totalRatingsString": "100K+",
            "sla": {
              "deliveryTime": 40,
              "lastMileTravel": 1.6,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "1.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-02-09 06:55:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                  "description": "bolt!"
                },
                {
                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "bolt!",
                        "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Burger.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.2",
                "ratingCount": "4.0K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7b8ec0e1-6099-4867-9050-986de783664f"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/bangalore/burger-king-koramangala-rest5934",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "186101",
            "name": "The Biryani Life",
            "cloudinaryImageId": "ggd0zsrhjn6bija7olci",
            "locality": "Jakkasandra",
            "areaName": "Hsr Layout 5th Sector",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Biryani",
              "Mughlai",
              "Lucknowi",
              "Hyderabadi",
              "Kebabs",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 3.8,
            "parentId": "8496",
            "avgRatingString": "3.8",
            "totalRatingsString": "951",
            "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 2.4,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "2.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-02-08 23:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹49"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7b8ec0e1-6099-4867-9050-986de783664f"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/bangalore/the-biryani-life-jakkasandra-hsr-layout-5th-sector-rest186101",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "566263",
            "name": "Faasos Signature Wraps & Rolls",
            "cloudinaryImageId": "c583ca6ce40b426797a78ae2ac91f2ec",
            "locality": "Jakkasandra",
            "areaName": "Sajapur Road",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Fast Food",
              "Snacks",
              "North Indian",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "340366",
            "avgRatingString": "4.3",
            "totalRatingsString": "142",
            "sla": {
              "deliveryTime": 38,
              "lastMileTravel": 2.4,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "2.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-02-08 23:59:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹63",
              "discountCalloutInfo": {
                "message": "Free Delivery",
                "logoCtx": {
                  "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7b8ec0e1-6099-4867-9050-986de783664f"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/bangalore/faasos-signature-wraps-and-rolls-jakkasandra-sajapur-road-rest566263",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "27811",
            "name": "Natural Ice Cream",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/8/0ca51204-1213-4593-a653-7f3cf64e9160_27811.JPG",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "Ice Cream",
              "Desserts"
            ],
            "avgRating": 4.8,
            "parentId": "2093",
            "avgRatingString": "4.8",
            "totalRatingsString": "19K+",
            "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 1.4,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "1.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-02-09 00:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                  "description": "bolt!"
                },
                {
                  "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "bolt!",
                        "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.5",
                "ratingCount": "4.8K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7b8ec0e1-6099-4867-9050-986de783664f"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/bangalore/natural-ice-cream-koramangala-rest27811",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "23678",
            "name": "McDonald's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/edc568f6-6813-4f2d-a670-911788f1f04f_23678.jpg",
            "locality": "5th Block",
            "areaName": "Koramangala",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
            ],
            "avgRating": 4.5,
            "parentId": "630",
            "avgRatingString": "4.5",
            "totalRatingsString": "63K+",
            "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 1.3,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "1.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-02-09 02:55:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                  "description": "bolt!"
                },
                {
                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "bolt!",
                        "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Burger.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹80 OFF",
              "subHeader": "ABOVE ₹299",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7b8ec0e1-6099-4867-9050-986de783664f"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/bangalore/mcdonalds-5th-block-koramangala-rest23678",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "671928",
            "name": "KFC",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/377e9327-3ca7-48ac-b36c-96f5bf6e186a_671928.JPG",
            "locality": "7th Block",
            "areaName": "Koramangla",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Fast Food",
              "Rolls & Wraps"
            ],
            "avgRating": 4.3,
            "parentId": "547",
            "avgRatingString": "4.3",
            "totalRatingsString": "3.9K+",
            "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 1.2,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "1.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-02-09 02:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                  "description": "bolt!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "bolt!",
                        "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹59"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7b8ec0e1-6099-4867-9050-986de783664f"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/bangalore/kfc-7th-block-koramangla-rest671928",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "10820",
            "name": "California Burrito",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/0e28a355-210c-4fe3-9d60-596c7fc89ec6_10820.jpg",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Mexican",
              "American",
              "Salads",
              "Continental",
              "Keto",
              "Healthy Food",
              "Beverages",
              "Snacks",
              "Desserts",
              "Fast Food"
            ],
            "avgRating": 4.6,
            "parentId": "1252",
            "avgRatingString": "4.6",
            "totalRatingsString": "41K+",
            "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 1.2,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "1.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-02-09 01:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                  "description": "bolt!"
                },
                {
                  "imageId": "Rxawards/_CATEGORY-Guiltfree.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "bolt!",
                        "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Guiltfree.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.3",
                "ratingCount": "2.1K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7b8ec0e1-6099-4867-9050-986de783664f"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/bangalore/california-burrito-koramangala-rest10820",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "65797",
            "name": "Leon's - Burgers & Wings (Leon Grill)",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33bfb682-d5fa-4054-9e2c-31911e34ebf6_65797.jpg",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "American",
              "Snacks",
              "Turkish",
              "Portuguese",
              "Continental"
            ],
            "avgRating": 4.5,
            "parentId": "371281",
            "avgRatingString": "4.5",
            "totalRatingsString": "55K+",
            "sla": {
              "deliveryTime": 37,
              "lastMileTravel": 1.4,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "1.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-02-09 04:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                  "description": "bolt!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "bolt!",
                        "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.5",
                "ratingCount": "4.6K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7b8ec0e1-6099-4867-9050-986de783664f"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/bangalore/leons-burgers-and-wings-leon-grill-koramangala-rest65797",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "590119",
            "name": "Bakingo",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/6/11ef8da4-664c-4b40-9b89-e962d40ab5aa_590119.jpg",
            "locality": "1st  Stage",
            "areaName": "BTM Layout",
            "costForTwo": "₹299 for two",
            "cuisines": [
              "Bakery",
              "Desserts",
              "Beverages",
              "Snacks"
            ],
            "avgRating": 4.6,
            "parentId": "3818",
            "avgRatingString": "4.6",
            "totalRatingsString": "7.8K+",
            "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-02-09 01:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7b8ec0e1-6099-4867-9050-986de783664f"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/bangalore/bakingo-1st-stage-btm-layout-rest590119",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "717421",
            "name": "Paris Panini - Gourmet Sandwiches & Wraps",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/1b14de7e-7efc-4eaa-aa07-95f1ab50dc58_717421 (1).jpg",
            "locality": "BTM Layout",
            "areaName": "Koramangala",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Continental",
              "Pastas",
              "Salads",
              "Desserts",
              "Snacks",
              "Fast Food",
              "French"
            ],
            "avgRating": 4.6,
            "parentId": "21019",
            "avgRatingString": "4.6",
            "totalRatingsString": "3.4K+",
            "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 1.6,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "1.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-02-08 23:30:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7b8ec0e1-6099-4867-9050-986de783664f"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/bangalore/paris-panini-gourmet-sandwiches-and-wraps-btm-layout-koramangala-rest717421",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "108097",
            "name": "Ambur Star Briyani Since 1890",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/12/bee2f2d5-6a39-477a-b669-c9df142ed5d0_108097.jpg",
            "locality": "2nd Stage",
            "areaName": "BTM Layout",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Biryani",
              "Chettinad",
              "Andhra",
              "Beverages",
              "Seafood"
            ],
            "avgRating": 4.5,
            "parentId": "21400",
            "avgRatingString": "4.5",
            "totalRatingsString": "21K+",
            "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-02-09 00:30:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7b8ec0e1-6099-4867-9050-986de783664f"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/bangalore/ambur-star-briyani-since-1890-2nd-stage-btm-layout-rest108097",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "690684",
            "name": "Burgerama",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/5/eb46c732-4004-4563-88ed-ace5893adccb_690684.jpg",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹700 for two",
            "cuisines": [
              "American"
            ],
            "avgRating": 4.3,
            "parentId": "8993",
            "avgRatingString": "4.3",
            "totalRatingsString": "2.2K+",
            "sla": {
              "deliveryTime": 36,
              "lastMileTravel": 2.4,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "2.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-02-09 04:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Gourmet",
                        "imageId": "newg.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.4",
                "ratingCount": "80"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7b8ec0e1-6099-4867-9050-986de783664f"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/bangalore/burgerama-koramangala-rest690684",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "733092",
            "name": "Caterspoint",
            "cloudinaryImageId": "be3c347a3ff9e54393083264ebb9228f",
            "locality": "Hosur Road",
            "areaName": "HSR",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Salads",
              "Healthy food",
              "Snacks",
              "pastas",
              "Lebanese",
              "Mexican",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "11011",
            "avgRatingString": "4.4",
            "totalRatingsString": "1.7K+",
            "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 2.1,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "2.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-02-09 01:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Gourmet",
                        "imageId": "newg.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹150 OFF",
              "subHeader": "ABOVE ₹299",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7b8ec0e1-6099-4867-9050-986de783664f"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/bangalore/caterspoint-hosur-road-hsr-rest733092",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "107443",
            "name": "Lo! - Low Carb and Keto Foods",
            "cloudinaryImageId": "o8t0w5gdlujpigauaflw",
            "locality": "HSR Layout",
            "areaName": "HSR",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "Healthy Food",
              "Keto",
              "Continental"
            ],
            "avgRating": 4.4,
            "parentId": "8282",
            "avgRatingString": "4.4",
            "totalRatingsString": "7.4K+",
            "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 3.6,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "3.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-02-09 01:00:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7b8ec0e1-6099-4867-9050-986de783664f"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/bangalore/lo-low-carb-and-keto-foods-layout-hsr-rest107443",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "643665",
            "name": "WeFit - Protein Bowls, Salads & Sandwiches",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/3/01f48b92-adaf-444d-a404-f49d23f0bf6c_643665.jpg",
            "locality": "Patel Narayana Reddy Layout",
            "areaName": "Ejipura",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Healthy Food",
              "Salads",
              "Keto",
              "Snacks"
            ],
            "avgRating": 4.6,
            "parentId": "355285",
            "avgRatingString": "4.6",
            "totalRatingsString": "533",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 0.8,
              "serviceability": "SERVICEABLE",
              "slaString": "20-30 mins",
              "lastMileTravelString": "0.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-02-09 02:00:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7b8ec0e1-6099-4867-9050-986de783664f"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/bangalore/wefit-protein-bowls-salads-and-sandwiches-patel-narayana-reddy-layout-ejipura-rest643665",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "681439",
            "name": "LeanCrust Pizza- ThinCrust Experts",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/02dd8027-a849-4cc5-9411-ea8e8cc767f9_681439.jpg",
            "locality": "6TH BLOCK",
            "areaName": "Koramangala",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Pizzas",
              "Italian",
              "Desserts"
            ],
            "avgRating": 4.6,
            "parentId": "11216",
            "avgRatingString": "4.6",
            "totalRatingsString": "428",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 0.8,
              "serviceability": "SERVICEABLE",
              "slaString": "20-30 mins",
              "lastMileTravelString": "0.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-02-09 02:00:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹159"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7b8ec0e1-6099-4867-9050-986de783664f"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/bangalore/leancrust-pizza-thincrust-experts-6th-block-koramangala-rest681439",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "622030",
            "name": "MOJO Pizza - 2X Toppings",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/12/aa5a8dc4-5b73-4dfc-86d6-edc0f1855f54_622030.jpg",
            "locality": "Patel Narayana Reddy Layout",
            "areaName": "Koramangala",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Pizzas",
              "Italian",
              "Fast Food",
              "Desserts"
            ],
            "avgRating": 4.6,
            "parentId": "11329",
            "avgRatingString": "4.6",
            "totalRatingsString": "1.1K+",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 0.8,
              "serviceability": "SERVICEABLE",
              "slaString": "20-30 mins",
              "lastMileTravelString": "0.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-02-09 02:00:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹100"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7b8ec0e1-6099-4867-9050-986de783664f"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/bangalore/mojo-pizza-2x-toppings-patel-narayana-reddy-layout-koramangala-rest622030",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "667571",
            "name": "Popeyes",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/11/5e24e79a-fdf5-4c6c-b200-64aa6c40e2b4_667571.jpg",
            "locality": "hosur Road Lakkasandra",
            "areaName": "Koramangala",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Burgers",
              "Fast Food",
              "Rolls & Wraps"
            ],
            "avgRating": 4,
            "parentId": "397044",
            "avgRatingString": "4.0",
            "totalRatingsString": "2.5K+",
            "sla": {
              "deliveryTime": 30,
              "lastMileTravel": 2.4,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-02-08 23:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹159"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.1",
                "ratingCount": "3.0K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7b8ec0e1-6099-4867-9050-986de783664f"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/bangalore/popeyes-hosur-road-lakkasandra-koramangala-rest667571",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "736632",
            "name": "Saladspoint",
            "cloudinaryImageId": "6116a2736e177c4a872d11a9d077584a",
            "locality": "Madiwala",
            "areaName": "Koramangala",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Salads",
              "Healthy food",
              "Juices",
              "Beverages"
            ],
            "avgRating": 4.5,
            "parentId": "8786",
            "avgRatingString": "4.5",
            "totalRatingsString": "809",
            "sla": {
              "deliveryTime": 31,
              "lastMileTravel": 1.7,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "1.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-02-09 01:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                  "description": "bolt!"
                },
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "bolt!",
                        "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "Gourmet",
                        "imageId": "newg.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹150 OFF",
              "subHeader": "ABOVE ₹299",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7b8ec0e1-6099-4867-9050-986de783664f"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/bangalore/saladspoint-madiwala-koramangala-rest736632",
            "type": "WEBLINK"
          }
        }
]

const RestaurantCard = (props) => {
    const {resData} = props;

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info;
    return (
        <div className="res-card">
            <img 
            className="res-card-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
            alt="logo"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime} minutes</h4>
        </div>
    )
}

const Body = ()=> {
    return (
        <div className="Body-container">
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map( (restaurant) => (
                    <RestaurantCard resData = {restaurant} key = {restaurant.info.id}/>
                ))}
            </div>
        </div>
    )
}

const AppLayout = ()=> {
    return (
        <div>
            <Header />
            <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);