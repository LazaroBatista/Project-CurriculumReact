export const resume = {
  fullName: "Seu Nome Aqui",
  title: "Seu Título Profissional",
  photo: require('../assets/images/foto.jpg'), // coloque a foto lá
  about:
    "Seu resumo profissional aqui. Um texto curto explicando seus objetivos, experiências e propósito.",

  experiences: [
    {
      id: "1",
      company: "Empresa A",
      role: "Cargo X",
      period: "Jan/2021 – Atual",
      description:
        "Descrição completa da experiência, atividades e resultados."
    },
    {
      id: "2",
      company: "Empresa B",
      role: "Cargo Y",
      period: "2019 – 2021",
      description:
        "Descrição da segunda experiência profissional."
    }
  ],

  education: [
    { id: "e1", institution: "Universidade X", course: "Sistemas de Informação", year: "2022" }
  ],

  skills: [
    { id: "s1", name: "React Native", level: 90 },
    { id: "s2", name: "JavaScript", level: 85 },
    { id: "s3", name: "Git", level: 80 }
  ],

  contacts: {
    email: "email@exemplo.com",
    phone: "+55 88 9 9999-9999",
    linkedin: "https://linkedin.com/in/seuperfil",
    github: "https://github.com/seuusuario"
  }
};
