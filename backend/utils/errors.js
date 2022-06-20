/********************** GESTION DES ERREURS *******************/

/*----- POUR LES ERREURS A L'INSCRIPTION -------*/
module.exports.signUpErrors = (err) => {
  let errors = { pseudo: "", email: "", password: "" }; // si les infos sont vides

  if (err.message.includes("pseudo"))
    errors.pseudo = "Pseudo incorrect ou déjà utilisé";

  if (err.message.includes("email")) errors.email = "Email incorrect";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe doit faire 6 caractères minimum";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
    // code 11000 en test postman
    errors.pseudo = "Pseudo déjà utilisé";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "Cet email est déjà enregistré";

  return errors;
};

/*----- POUR LES ERREURS A LA CONNEXION -------*/
module.exports.logInErrors = (err) => {
  let errors = { email: '', password: ''}

  if (err.message.includes("email")) 
    errors.email = "Email inconnu";
  
  if (err.message.includes('password'))
    errors.password = "Le mot de passe ne correspond pas"

  return errors;
};

// /*----- POUR LES ERREURS DES IMAGES -------*/
// module.exports.uploadErrors = (err) => {
//   let errors = { format: "", maxSize: "" };

//   if (err.message.includes("invalid file")) errors.format = "Format invalide";

//   if (err.message.includes("max size"))
//     errors.maxSize = "Le fichier est trop lourd (+ 500ko)";

//   return errors;
// };