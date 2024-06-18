export default function Contact() {
  const contact = {
    first: "Kevin",
    last: "Comba",
    avatar: "https://robohash.org/you.png?size=200x200",
    twitter: "_kevincomba",
    notes: "I love coding",
    favorite: true,
  };

  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar}
        />
      </div>
      <h1>
        {contact.first} {contact.last}
      </h1>

      <a href={`https://twitter.com/${contact.twitter}`}>
        @{contact.twitter}
      </a>
    </div>
  );
}

