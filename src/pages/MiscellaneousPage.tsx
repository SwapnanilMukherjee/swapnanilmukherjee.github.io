export const MiscellaneousPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-semibold mb-8">Miscellaneous</h1>
      
      <div className="space-y-8">
        {/* Teaching */}
        <section>
          <h2 className="text-lg font-medium mb-4">Teaching</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">Teaching Assistant - Course Name</h3>
                <span className="text-sm text-muted-foreground">Fall 2024</span>
              </div>
              <p className="text-sm text-muted-foreground">
                University Name • Instructor: Prof. Name
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Responsibilities: Leading lab sessions, grading assignments, holding office hours.
              </p>
            </div>
            
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">Grader - Another Course</h3>
                <span className="text-sm text-muted-foreground">Spring 2024</span>
              </div>
              <p className="text-sm text-muted-foreground">
                University Name • Instructor: Prof. Another Name
              </p>
            </div>
          </div>
        </section>

        {/* Service */}
        <section>
          <h2 className="text-lg font-medium mb-4">Service</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-medium">Reviewer</h3>
              <p className="text-sm text-muted-foreground">
                Conference/Workshop Name 2024, Journal Name
              </p>
            </div>
            <div>
              <h3 className="font-medium">Student Volunteer</h3>
              <p className="text-sm text-muted-foreground">
                Major Conference 2024 - Helped with registration and logistics
              </p>
            </div>
          </div>
        </section>

        {/* Awards & Honors */}
        <section>
          <h2 className="text-lg font-medium mb-4">Awards & Honors</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">Graduate Fellowship</h3>
                <p className="text-sm text-muted-foreground">University Name</p>
              </div>
              <span className="text-sm text-muted-foreground">2024</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">Best Student Paper Award</h3>
                <p className="text-sm text-muted-foreground">Conference Name</p>
              </div>
              <span className="text-sm text-muted-foreground">2023</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">Undergraduate Research Award</h3>
                <p className="text-sm text-muted-foreground">Previous University</p>
              </div>
              <span className="text-sm text-muted-foreground">2022</span>
            </div>
          </div>
        </section>

        {/* Skills & Tools */}
        <section>
          <h2 className="text-lg font-medium mb-4">Skills & Tools</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Programming Languages</h3>
              <p className="text-sm text-muted-foreground">
                Python, R, JavaScript, Java, C++
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">ML/AI Frameworks</h3>
              <p className="text-sm text-muted-foreground">
                PyTorch, TensorFlow, scikit-learn, Hugging Face
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Tools & Platforms</h3>
              <p className="text-sm text-muted-foreground">
                Git, Docker, AWS, Jupyter, LaTeX
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Languages</h3>
              <p className="text-sm text-muted-foreground">
                English (Native), Spanish (Conversational)
              </p>
            </div>
          </div>
        </section>

        {/* Personal Interests */}
        <section>
          <h2 className="text-lg font-medium mb-4">Beyond Academia</h2>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not researching, I enjoy [hobbies/interests]. I'm passionate about 
            [personal interests] and love [activities]. I also volunteer with [organization] 
            and am always interested in [other activities/causes].
          </p>
        </section>
      </div>
    </div>
  );
};