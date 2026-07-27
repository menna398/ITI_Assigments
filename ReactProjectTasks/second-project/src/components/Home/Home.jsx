import React from "react";

function Home() {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">My Skills</h1>
        <p className="text-secondary">
          Technologies I'm currently learning and using.
        </p>
      </div>

      <div className="row g-4">

        <div className="col-md-4">
          <div className="card h-100 shadow rounded-4 border-0">
            <div className="card-body text-center p-4">
              <h3 className="mb-4 text-primary">Front-End</h3>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">HTML</li>
                <li className="list-group-item">CSS</li>
                <li className="list-group-item">Bootstrap</li>
                <li className="list-group-item">JavaScript</li>
                <li className="list-group-item">React</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow rounded-4 border-0">
            <div className="card-body text-center p-4">
              <h3 className="mb-4 text-primary">Back-End</h3>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">C#</li>
                <li className="list-group-item">ASP.NET Core</li>
                <li className="list-group-item">Entity Framework Core</li>
                <li className="list-group-item">LINQ</li>
                <li className="list-group-item">SQL Server</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow rounded-4 border-0">
            <div className="card-body text-center p-4">
              <h3 className="mb-4 text-primary">Tools</h3>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">Git</li>
                <li className="list-group-item">GitHub</li>
                <li className="list-group-item">VS Code</li>
                <li className="list-group-item">Postman</li>
                <li className="list-group-item">Figma</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;