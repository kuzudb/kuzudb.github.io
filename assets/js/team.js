const members = [
  {
    name: "Semih Salihoğlu",
    title: "CEO & Co-founder",
    img: "/img/team/semih_thumbnail.png",
  },
  {
    name: "Guodong Jin",
    title: "Software Engineer & Co-founder",
    img: "/img/team/guodong_thumbnail.png",
  },
  {
    name: "Xiyang Feng",
    title: "Software Engineer & Co-founder",
    img: "/img/team/xiyang_thumbnail.png",
  },
  {
    name: "Ziyi Chen",
    title: "Software Engineer & Co-founder",
    img: "/img/team/ziyi_thumbnail.png",
  },
  {
    name: "Chang Liu",
    title: "DevOps Engineer & Co-founder",
    img: "/img/team/chang_thumbnail.png",
  },
  {
    name: "Benjamin Winger",
    title: "Software Engineer",
    img: "/img/team/benjamin_thumbnail.png",
  },
  {
    name: "Prashanth Rao",
    title: "AI Engineer",
    img: "/img/team/prashanth_thumbnail.png",
  },
  {
    name: "Cihan Bıyıkoğlu",
    title: "Advisor",
    img: "/img/team/cihan_thumbnail.png",
  },
];

const teamMembersDiv = $("#team-members")[0];
for (const member of members) {
  const memberDiv = document.createElement("div");
  memberDiv.className = "team-member-profile";
  const memberWrapper = document.createElement("div");
  memberWrapper.className = "team-member-profile-wrapper";
  const memberImg = document.createElement("img");
  memberImg.src = member.img;
  memberImg.alt = member.name;
  const textWrapper = document.createElement("div");
  textWrapper.className = "team-member-profile-text-wrapper";
  const memberName = document.createElement("h4");
  memberName.innerText = member.name;
  const memberTitle = document.createElement("p");
  memberTitle.innerText = member.title;
  textWrapper.appendChild(memberName);
  textWrapper.appendChild(memberTitle);
  memberWrapper.appendChild(memberImg);
  memberWrapper.appendChild(textWrapper);
  memberDiv.appendChild(memberWrapper);
  teamMembersDiv.appendChild(memberDiv);
}