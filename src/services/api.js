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
        console.error(response);
        throw new Error("Erreur de requête POST");
      }
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
