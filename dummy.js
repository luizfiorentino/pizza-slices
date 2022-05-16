sendWelcomeEmail({
  name: "Kelley",
  email: "kelley@codaisseur.com",
  rubrics: {
    jobs: {
      title: "Job postings",
      desc: "Get updates on job postings in our network",
    },
    tech: {
      title: "Tech news",
      desc: "From React gossip to the newest and coolest libraries",
    },
    random: { title: "Just memes really" },
  },
});

function sendWelcomeEmail(name, email, rubrics = []) {
  const url = "https://codaisseur.news";
  const message = `
      <p>Hi ${name}!</p>
  
      <p>Welcome to the Codaisseur news outlet! We're
       super happy to have you onboard!</p>
  
      <p>You've indicated you want to receive weekly
       updates on the following ${rubrics.length} rubrics:</p>
  
      <div class="grid">
        ${rubrics
          .map((rubric) => {
            return `
            <div class="rubric">
              <strong>${rubric.title}</strong>
              <p>${rubric.descr}</p>
            </div>
          `;
          })
          .join("")}
      </div>
  
      <p>Love, your teachers and the rest of the team</p>
  
      <p class="small muted">
        <a href="${url}/unsubscribe?email=${email}">Unsubscribe</a>
      </p>
    `;

  console.log(message);
}
