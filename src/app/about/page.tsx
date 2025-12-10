import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About the Author | A Christmas Ancestry',
  description: 'Learn more about the author of A Christmas Ancestry',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-christmas-red mb-8 text-center">
          About the Author
        </h1>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-12">
          {/* Author Photo Placeholder */}
          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-christmas-red to-christmas-green flex items-center justify-center">
              <span className="text-6xl text-white">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
          </div>

          {/* Biography */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-christmas-green mb-4">
              Biography
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                [Author Name] is a passionate writer, speaker, and student of Scripture with a deep love for the Gospel message.
                With [X years] of experience in ministry and biblical teaching, they have dedicated their life to helping others
                discover the rich heritage of faith that culminates in Jesus Christ.
              </p>
              <p>
                Born and raised in [Location], [Author Name] developed an early fascination with the genealogies and
                stories of the Bible, seeing them not as dry lists of names, but as vibrant testimonies of God's faithfulness
                across generations. This passion led to the creation of "A Christmas Ancestry," a unique devotional journey
                through the lineage of Jesus.
              </p>
              <p>
                [Author Name] holds a [Degree] in [Field] from [Institution] and has [additional credentials or achievements].
                When not writing or teaching, you can find them [personal interests/hobbies that show their human side].
              </p>
            </div>
          </section>

          {/* Ministry */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-christmas-green mb-4">
              Ministry
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                For over [X years], [Author Name] has served in various capacities within the church and Christian community.
                Their ministry focuses on [specific areas: biblical literacy, discipleship, worship, etc.], with a particular
                emphasis on making Scripture accessible and meaningful to everyday believers.
              </p>
              <p>
                Through teaching, writing, and mentorship, [Author Name] has impacted countless lives, helping people see
                the connections between the Old and New Testaments and understand how Jesus is the fulfillment of God's
                promises throughout history.
              </p>
              <p>
                [Author Name] currently serves as [current role/position] at [Organization/Church], where they [specific
                responsibilities or contributions].
              </p>
            </div>
          </section>

          {/* Books & Publications */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-christmas-green mb-4">
              Books & Publications
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-christmas-gold pl-4">
                <h3 className="font-bold text-lg text-christmas-red mb-2">
                  A Christmas Ancestry (2024)
                </h3>
                <p className="text-gray-700">
                  A 24-day Advent devotional journey through the genealogy of Jesus Christ, exploring how each
                  generation points to the Messiah. Available on Amazon.
                </p>
              </div>

              <div className="border-l-4 border-christmas-gold pl-4">
                <h3 className="font-bold text-lg text-christmas-red mb-2">
                  [Previous Book Title]
                </h3>
                <p className="text-gray-700">
                  [Brief description of another work, if applicable]
                </p>
              </div>

              <div className="border-l-4 border-christmas-gold pl-4">
                <h3 className="font-bold text-lg text-christmas-red mb-2">
                  Articles & Essays
                </h3>
                <p className="text-gray-700">
                  [Author Name] has contributed articles to [Publications], covering topics such as [topics].
                </p>
              </div>
            </div>
          </section>

          {/* Contact & Connect */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-christmas-green mb-4">
              Connect
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                To learn more about [Author Name]'s work, upcoming speaking engagements, or to invite them to speak
                at your event, please reach out through the following channels:
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="mailto:contact@placeholder.com"
                  className="flex items-center gap-2 px-5 py-3 bg-christmas-red text-white rounded-md hover:bg-red-800 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email
                </a>

                <a
                  href="https://twitter.com/placeholder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-christmas-green text-white rounded-md hover:bg-green-800 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  Twitter
                </a>

                <a
                  href="https://facebook.com/placeholder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-christmas-gold text-christmas-red rounded-md hover:bg-yellow-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
