import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import config from "./config";
// import { CircularProgress, Typography, Box } from "@mui/material";

function FinalAuthCallback() {
  const navigate = useNavigate();
  const [searchParams, _setSearchParams] = useSearchParams();
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  useEffect(() => {
    if (code) {
      // Send the access_code to the backend using axios
      axios
        .post(
          `${config.apiHostname}/auth/oauth2callback`,
          { code: code, state: state },
          { withCredentials: true } // To include cookies in the request
        )
        .then((response) => {
          console.log("code stored successfully", response.data);
          // Redirect to the dashboard or another page
          navigate("/clear");
        })
        .catch((error) => {
          console.error("Error storing token:", error);
        });
    } else {
      console.error("No access token found in the URL");
    }
  }, [navigate]);

  return (
    <> Loading </>
    // <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
    //   <Box className="text-center">
    //     <CircularProgress size={60} className="text-blue-600 mb-4" />
    //     <Typography variant="h5" className="text-gray-800 font-semibold">
    //       Loading...
    //     </Typography>
    //     <Typography variant="body1" className="text-gray-600 mt-2">
    //       Processing authentication
    //     </Typography>
    //   </Box>
    // </div>
  );
}

export default FinalAuthCallback;
