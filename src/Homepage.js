import React from "react";
import Card from "./Component/Card";

const Homepage = () => {
    const jsonadata = [
        {
          id: 1,
          name: "To Kill a Mockingbird",
          image: "/10 Harper’s Bazaar editors on the books that changed their lives.jpg",
          price: "₹1,399.00",
          quantity: 1,
          description:
            "A classic novel by Harper Lee, exploring themes of racial injustice and moral growth in the American South during the 1930s.",
        },
        {
          id: 2,
          name: "Pride and Prejudice",
          image: "/Pride & Prejudice (2005).jpg",
          price: "₹2,099.00",
          quantity: 2,
          description:
            "Jane Austen's beloved novel about the complexities of class, marriage, and love in early 19th-century England.",
        },
        {
          id: 3,
          name: "The Great Gatsby",
          image: "/The Great Gatsby - Hardcover.jpg",
          price: "₹999.00",
          quantity: 1,
          description:
            "F. Scott Fitzgerald's classic novel depicting the excesses and illusions of the Jazz Age in 1920s America.",
        },
        {
          id: 4,
          name: "1984",
          image: "/40 best books to read before you die.jpg",
          price: "₹2,599.00",
          quantity: 3,
          description:
            "George Orwell's dystopian masterpiece, warning of the dangers of totalitarianism and surveillance.",
        },
        {
          id: 5,
          name: "The Catcher in the Rye",
          image: "/catcherintherye.jpg",
          price: "₹1,599.00",
          quantity: 2,
          description:
            "J.D. Salinger's iconic novel featuring the memorable character Holden Caulfield as he navigates adolescence and society.",
        },
        {
          id: 6,
          name: "The Hobbit",
          image: "/hobbit.jpg",
          price: "₹699.00",
          quantity: 1,
          description:
            "J.R.R. Tolkien's classic fantasy adventure about Bilbo Baggins, a hobbit who embarks on an epic journey.",
        },
        {
          id: 7,
          name: "War and Peace",
          image: "/warandpeace.jpg",
          price: "₹3,499.00",
          quantity: 2,
          description:
            "Leo Tolstoy's epic novel set against the backdrop of the Napoleonic Wars, exploring themes of love, war, and destiny.",
        },
        {
          id: 8,
          name: "Moby-Dick",
          image: "/mobydick.jpg",
          price: "₹2,399.00",
          quantity: 1,
          description:
            "Herman Melville's timeless tale of Captain Ahab's obsessive pursuit of the great white whale, Moby Dick.",
        },
        {
          id: 9,
          name: "The Lord of the Rings",
          image: "/lordoftherings.jpg",
          price: "₹1,399.00",
          quantity: 1,
          description:
            "J.R.R. Tolkien's epic fantasy trilogy chronicling the quest to destroy the One Ring and save Middle-earth from darkness.",
        },
        {
          id: 10,
          name: "Brave New World",
          image: "/bravenewworld.jpg",
          price: "₹2,099.00",
          quantity: 3,
          description:
            "Aldous Huxley's dystopian novel depicting a futuristic society controlled by technology and the consequences of a perfect world.",
        },
        {
          id: 11,
          name: "The Odyssey",
          image: "/odyssey.jpg",
          price: "₹999.00",
          quantity: 2,
          description:
            "Homer's epic poem narrating the adventures of Odysseus as he tries to return home after the Trojan War.",
        },
        {
          id: 12,
          name: "The Sun Also Rises",
          image: "/sunalsorises.jpg",
          price: "₹2,599.00",
          quantity: 1,
          description:
            "Ernest Hemingway's novel capturing the experiences of the Lost Generation as they search for meaning in post-World War I Europe.",
        },
        {
          id: 13,
          name: "Fahrenheit 451",
          image: "/fahrenheit451.jpg",
          price: "₹1,599.00",
          quantity: 2,
          description:
            "Ray Bradbury's science fiction classic envisioning a future where books are banned, and firemen burn them to control society.",
        },
        {
          id: 14,
          name: "The Alchemist",
          image: "/alchemist.jpg",
          price: "₹699.00",
          quantity: 1,
          description:
            "Paulo Coelho's philosophical novel following the journey of a shepherd named Santiago in search of his personal legend.",
        },
        {
          id: 15,
          name: "Wuthering Heights",
          image: "/wutheringheights.jpg",
          price: "₹3,499.00",
          quantity: 1,
          description:
            "Emily Brontë's gothic novel exploring themes of love, revenge, and the supernatural on the desolate moors of Yorkshire.",
        },
        {
          id: 16,
          name: "Crime and Punishment",
          image: "/crimepunishment.jpg",
          price: "₹2,399.00",
          quantity: 2,
          description:
            "Fyodor Dostoevsky's psychological novel delving into the mind of Raskolnikov, a student who commits a murder and grapples with guilt.",
        },
        {
          id: 17,
          name: "The Brothers Karamazov",
          image: "/karamazov.jpg",
          price: "₹1,399.00",
          quantity: 1,
          description:
            "Fyodor Dostoevsky's epic novel exploring the moral and philosophical dilemmas faced by the Karamazov brothers in 19th-century Russia.",
        },
        {
          id: 18,
          name: "The Shining",
          image: "/shining.jpg",
          price: "₹2,099.00",
          quantity: 1,
          description:
            "Stephen King's iconic horror novel set in the haunted Overlook Hotel, where the Torrance family faces terrifying supernatural forces.",
        },
        {
          id: 19,
          name: "The Road",
          image: "/road.jpg",
          price: "₹999.00",
          quantity: 2,
          description:
            "Cormac McCarthy's post-apocalyptic novel following a father and son as they journey through a bleak and dangerous landscape.",
        },
        {
          id: 20,
          name: "Alice's Adventures in Wonderland",
          image: "/aliceinwonderland.jpg",
          price: "₹2,599.00",
          quantity: 3,
          description:
            "Lewis Carroll's whimsical and imaginative tale of Alice's adventures in a fantastical world filled with peculiar characters and nonsensical events.",
        },
      ];
      

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2  gap-6 sm:mx-6 m-3">
      {jsonadata.map((item) => {
        return (
          <a href={`/detail/${encodeURIComponent(item.name)}`} target={"_blank"} key={item.id}>
            <Card item={item} />
          </a>
        );
      })}
    </div>
  );
};

export default Homepage;
