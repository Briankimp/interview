"use client";
import React from "react";
import Template from "./components/Template";
import {
  Box,
  Button,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";
import LinearWithValueLabel from "./components/LinearProgress";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Link from "next/link";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import SummarizeIcon from "@mui/icons-material/Summarize";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupsIcon from "@mui/icons-material/Groups";
import ShareIcon from "@mui/icons-material/Share";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { DashboardButton } from "../../components/DashboardButton";
const page = () => {
  const [project, setProject] = React.useState("");
  const Projects = [
    "Retail",
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Hospitality",
    "Manufacturing",
  ];
  return (
    <Template>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          gap: { xs: 1, sm: 1.5 },

          mx: { xs: 1, sm: 2, md: 3, lg: 4 },

          overflowY: { xs: "auto", md: "visible" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "space-between",

            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 2.5,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "text.primary",
              }}
            >
              Home
            </Typography>
            <ArrowForwardIosIcon
              sx={{
                color: "light.main",
                height: 7,
                width: 12,
              }}
            />
            <Typography
              variant="h4"
              sx={{
                color: "light.main",
              }}
            >
              Project Name
            </Typography>
          </Box>
          <Box>
            <TextField
              select
              variant="outlined"
              margin="normal"
              placeholder="Select Your Project"
              value={project}
              onChange={(event) => setProject(event.target.value)}
              SelectProps={{
                IconComponent: KeyboardArrowDownIcon,
                displayEmpty: true,
              }}
              InputProps={{
                sx: {
                  borderRadius: 36,
                  px: 2.5,
                  py: 1.5,
                  width: 263,
                  height: 38,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1.25,
                  border: "1px solid",
                },
              }}
            >
              <MenuItem value="" disabled sx={{}}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.primary",
                  }}
                >
                  Project Name
                </Typography>
              </MenuItem>
              {Projects.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            borderRadius: 2,
            border: "1px solid",
            gap: 4,
            background: `
              linear-gradient(90deg, #56138a 0%, #cb98f3 49%, #ab61e4 57%),
              url(/campaigns-section.jpg) center/cover no-repeat
            `,

            backgroundBlendMode: "overlay",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            boxSizing: "border-box",
          }}
        >
          <Image
            src="/overviewcontent.svg"
            alt="Logo"
            width={150}
            height={150}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "left",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 2.5,
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "dashboardText.white",
              }}
            >
              {" "}
              Welcome to your new project : [ProjectName]
            </Typography>

            <Button
              variant="contained"
              startIcon={<CancelOutlinedIcon color="primary" />}
              sx={{
                backgroundColor: "lighert.main",
                borderRadius: 4,
                gap: 0.75,
                width: "fit-content",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "text.primary",
                }}
              >
                Project Settings
              </Typography>
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            boxSizing: "border-box",
            width: "100%",
            ml: 0.5,
            mr: 0.5,
            p: 2.5,
            gap: 1.5,
            borderRadius: 2,
            border: "1px solid ",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 2.5,
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "text.primary",
              }}
            >
              Onboarding Progress
            </Typography>
            <Button
              variant="text"
              startIcon={<CancelOutlinedIcon color="primary" />}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "primary.main",
                }}
              >
                Hide
              </Typography>
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",

              flexDirection: "column",
              justifyContent: "flex-start",
              gap: 2.5,
              width: "100%",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "text.primary",
              }}
            >
              You've completed 2 of 6 steps onboarding
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: 2.5,
                width: "100%",
                height: { md: 21, xs: 49 },
                boxSizing: "border-box",
              }}
            >
              <LinearWithValueLabel />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              width: "100%",
              backgroundColor: "lighert.main",
              borderRadius: 1.25,
              px: 2.5,
              py: 1.25,
              boxSizing: "border-box",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "text.primary",
              }}
            >
              What's next
            </Typography>
            <DashboardButton
              variant="contained"
              startIcon={
                <EmojiFlagsIcon sx={{ color: "dashboardText.white" }} />
              }
            >
              Start New Campaign
            </DashboardButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: 2.5,
              width: "100%",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 1.5,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: 1,
                }}
              >
                <CheckCircleIcon color="success" />
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.primary",
                  }}
                >
                  User Type Selected
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: 1,
                }}
              >
                <CheckCircleIcon color="success" />
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "text.primary",
                    letterSpacing: 0,
                  }}
                >
                  Project Created
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: 1,
                }}
              >
                <CheckCircleIcon color="success" />
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "text.primary",
                    letterSpacing: 0,
                  }}
                >
                  Team Assigned
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: 1,
                }}
              >
                <CheckCircleIcon color="success" />
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "text.primary",
                    letterSpacing: 0,
                  }}
                >
                  Access Control Setup
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: 1,
                }}
              >
                <CancelIcon color="error" />

                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "text.primary",
                    letterSpacing: 0,
                  }}
                >
                  First Campaign Created
                </Typography>
                <Link href="/onboarding/step4">
                  <Typography>Create Campaign</Typography>
                </Link>
              </Box>
            </Stack>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "flex-start",
            gap: 1,
            width: "100%",
          }}
        >
          <DashboardButton
            variant="contained"
            startIcon={<EmojiFlagsIcon sx={{ color: "dashIcons.main" }} />}
          >
            Start New Campaign
          </DashboardButton>
          <DashboardButton
            variant="contained"
            startIcon={<ShareIcon sx={{ color: "dashIcons.main" }} />}
          >
            Connect Ad Accounts
          </DashboardButton>
          <DashboardButton
            variant="contained"
            startIcon={
              <FileUploadIcon
                sx={{
                  color: "dashboardText.white",
                }}
              />
            }
          >
            Upload Media Assets
          </DashboardButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: 1,
            width: "100%",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: 1,
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 600,
                color: "text.primary",
                letterSpacing: 0,
              }}
            >
              KPI Summary
            </Typography>
          </Stack>

          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              gap: 1,
              width: "100%",
            }}
          >
            <Paper
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: 1.5,
                borderRadius: 2,
                px: 2.5,
                py: 1.75,
                border: "1px solid #0000001F",
                boxSizing: "border-box",
                flex: 1,
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 1.5,
                  px: 0.25,
                  py: 0.5,
                  height: 64,
                  width: 64,
                  backgroundColor: "lighert.main",
                }}
              >
                <SummarizeIcon
                  sx={{ color: "primary.main", height: 30, width: 30 }}
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: 1,
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 500,
                      color: "text.primary",
                      letterSpacing: 0,
                      textTransform: "none",
                    }}
                  >
                    Total Revenue
                  </Typography>
                  <InfoOutlineIcon />
                </Box>
                <Typography
                  sx={{
                    fontSize: 32,
                    fontWeight: 600,
                    color: "text.primary",
                    letterSpacing: 0,
                    textTransform: "none",
                  }}
                >
                  $0.00
                </Typography>
              </Box>
            </Paper>
            <Paper
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: 1.5,
                borderRadius: 2,
                px: 2.5,
                py: 1.75,
                border: "1px solid #0000001F",
                boxSizing: "border-box",
                flex: 1,
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 1.5,
                  px: 0.25,
                  py: 0.5,
                  height: 64,
                  width: 64,

                  backgroundColor: "lighert.main",
                }}
              >
                <PersonAddIcon
                  sx={{ color: "primary.main", height: 30, width: 30 }}
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: 1,
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 500,
                      color: "text.primary",
                      letterSpacing: 0,
                      textTransform: "none",
                    }}
                  >
                    New Clients This Month
                  </Typography>
                  <InfoOutlineIcon />
                </Box>
                <Typography
                  sx={{
                    fontSize: 32,
                    fontWeight: 600,
                    color: "text.primary",
                    letterSpacing: 0,
                    textTransform: "none",
                  }}
                >
                  0
                </Typography>
              </Box>
            </Paper>
            <Paper
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: 1.5,
                borderRadius: 2,
                px: 2.5,
                py: 1.75,
                border: "1px solid #0000001F",
                boxSizing: "border-box",
                flex: 1,
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 1.5,
                  px: 0.25,
                  py: 0.5,
                  height: 64,
                  width: 64,

                  backgroundColor: "lighert.main",
                }}
              >
                <GroupsIcon
                  sx={{ color: "primary.main", height: 30, width: 30 }}
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: 1,
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 500,
                      color: "text.primary",
                      letterSpacing: 0,
                      textTransform: "none",
                    }}
                  >
                    Active Team Members
                  </Typography>
                  <InfoOutlineIcon />
                </Box>
                <Typography
                  sx={{
                    fontSize: 32,
                    fontWeight: 600,
                    color: "text.primary",
                    letterSpacing: 0,
                    textTransform: "none",
                  }}
                >
                  0
                </Typography>
              </Box>
            </Paper>
          </Stack>
        </Box>
      </Box>
    </Template>
  );
};

export default page;
