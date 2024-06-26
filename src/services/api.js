const apiUrl = "http://localhost:3001/api/v1/";

export const logUser = async (options) => {
  try {
    const response = await fetch(apiUrl + "user/login", options);

    if (!response.ok) {
      if (response.status === 400) {
        const badRequest = {
          status: 400,
          message: "Error : check your mail address and your password.",
        };
        return badRequest;
      } else {
        throw new Error("Erreur de requête POST");
      }
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof TypeError && error.message === "Failed to fetch") {
      return {
        status: "network_error",
        message: "Cannot reach the server. Please try again later.",
      };
    } else {
      return {
        status: "unknown_error",
        message: "An unexpected error occurred. Please try again later.",
      };
    }
  }
};

export const getUser = async (token) => {
  if (token) {
    try {
      const options = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(apiUrl + "user/profile", options);

      if (!response.ok) {
        throw new Error("Erreur de requête POST");
      }

      const data = await response.json();
      return data.body;
    } catch (error) {
      console.error(error);
    }
  }
};

export const updateUserProfile = async (token, body) => {
  try {
    const options = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    const response = await fetch(apiUrl + "user/profile", options);

    if (!response.ok) {
      throw new Error("Erreur de requête POST");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      status: 500,
    };
  }
};
