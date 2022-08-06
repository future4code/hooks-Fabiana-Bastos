export const goToHome = (navigate) => {
    navigate("/");
};

export const goBack = (navigate) => {
    navigate(-1);
};

export const goToTripsPage = (navigate) => {
    navigate("/trips/list");
};

export const goToLoginPage = (navigate) => {
    navigate("/login");
};

export const goToTripsDetails = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
};

export const goToCreateTrips = (navigate) => {
    navigate("/admin/trips/create")
};

export const goToForm = (navigate) => {
    navigate("/trips/application")
};
