function Index() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Buddha Landing</h1>
        <p className="text-lg mb-6">
          Discover the teachings and life of Buddha. Explore the path to
          enlightenment and inner peace.
        </p>
      </div>
      <section id="about" className="my-8">
        <h2 className="text-3xl font-semibold mb-4">About Buddha</h2>
        <p>
          Buddha, also known as Siddhartha Gautama, was a spiritual teacher in
          ancient India who founded Buddhism. He is believed to have lived and
          taught in the northeastern part of the Indian subcontinent sometime
          between the 6th and 4th centuries BCE.
        </p>
      </section>
      <section id="teachings" className="my-8">
        <h2 className="text-3xl font-semibold mb-4">Teachings of Buddha</h2>
        <p>
          Buddha's teachings are centered around the Four Noble Truths and the
          Eightfold Path. These teachings provide a framework for understanding
          the nature of suffering and the path to liberation.
        </p>
      </section>
      <section id="contact" className="my-8">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p>
          If you have any questions or would like to learn more about Buddha and
          his teachings, feel free to reach out to us.
        </p>
      </section>
    </main>
  );
}

export default Index;