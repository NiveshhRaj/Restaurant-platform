"use client";

export default function AboutPage() {
  return (
    <div className="bg-slate-100 text-gray-800">

      {/* HERO SECTION */}

      <section className="relative h-[70vh] flex items-center justify-center">

        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
          alt="restaurant"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center text-white">

          <h1 className="text-5xl font-bold mb-4">
            About Graze & Grain
          </h1>

          <p className="text-lg max-w-xl mx-auto">
            A place where authentic flavors meet modern dining experiences.
          </p>

        </div>

      </section>


      {/* OUR STORY */}

      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">

        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
          alt="restaurant interior"
          className="rounded-xl shadow-lg"
        />

        <div>

          <h2 className="text-3xl font-bold mb-6">
            Our Story
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Graze & Grain was founded with a simple mission — to create a
            welcoming space where people can enjoy fresh, locally sourced
            ingredients prepared with passion and creativity.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our chefs combine traditional recipes with modern culinary
            techniques to deliver a dining experience that is both authentic
            and unforgettable.
          </p>

        </div>

      </section>


      {/* IMAGE GALLERY */}

      <section className="bg-white py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            A Taste of Our Atmosphere
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de"
              className="rounded-xl shadow-md hover:scale-105 transition"
            />

            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
              className="rounded-xl shadow-md hover:scale-105 transition"
            />

            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
              className="rounded-xl shadow-md hover:scale-105 transition"
            />

          </div>

        </div>

      </section>


      {/* CHEF SECTION */}

      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>

          <h2 className="text-3xl font-bold mb-6">
            Meet Our Chef
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Our head chef brings over 15 years of culinary expertise,
            blending global flavors with local ingredients to craft dishes
            that excite the palate.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Every dish is prepared with attention to detail, ensuring
            the perfect balance of flavor, texture, and presentation.
          </p>

        </div>

        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
          alt="chef"
          className="rounded-xl shadow-lg"
        />

      </section>


      {/* MISSION */}

      <section className="bg-black text-white py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-3xl font-bold mb-6">
            Our Mission
          </h2>

          <p className="text-gray-300 leading-relaxed">
            At Graze & Grain, we believe food is more than just nourishment —
            it's an experience. Our mission is to bring people together
            through exceptional food, warm hospitality, and memorable
            moments around the table.
          </p>

        </div>

      </section>

    </div>
  );
}