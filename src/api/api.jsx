const API_URL = "https://dummyjson.com/users";

export const getStudents = () => {
  return fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Unable to fetch student data.");
      }

      return response.json();
    })
    .then((data) => {
      return data.users.map((user, index) => ({
        id: user.id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        phone: user.phone,
        age: user.age,
        gender: user.gender,
        image: user.image,
        department: [
          "Computer Science",
          "Electronics",
          "Mechanical",
          "Civil",
        ][index % 4],
        course: [
          "BCA",
          "B.Tech",
          "MCA",
          "BBA",
        ][index % 4],
        year: `${(index % 4) + 1} Year`,
        
      }));
    });
};