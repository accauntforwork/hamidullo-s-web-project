import { useState } from "react";

function CodePlayground() {
  const [html, setHtml] = useState("<h1>Salom, Dunyo!</h1>");
  const [css, setCss] = useState("h1 { color: green; }");
  const [js, setJs] = useState("console.log('Salom!');");
  const [srcDoc, setSrcDoc] = useState("");

  const handleRun = () => {
    const source = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}<\/script>
        </body>
      </html>
    `;
    setSrcDoc(source);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        💻 Kod yozish va sinash maydoni
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block font-semibold mb-1">HTML</label>
          <textarea
            className="w-full h-40 border p-2 font-mono text-sm"
            value={html}
            onChange={(e) => setHtml(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">CSS</label>
          <textarea
            className="w-full h-40 border p-2 font-mono text-sm"
            value={css}
            onChange={(e) => setCss(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">JavaScript</label>
          <textarea
            className="w-full h-40 border p-2 font-mono text-sm"
            value={js}
            onChange={(e) => setJs(e.target.value)}
          />
        </div>
      </div>

      <button
        onClick={handleRun}
        className="mb-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        ▶️ Ishga tushurish
      </button>

      <h3 className="text-lg font-semibold mb-2">Natija:</h3>
      <div className="border rounded overflow-hidden">
        <iframe
          srcDoc={srcDoc}
          title="Natija"
          sandbox="allow-scripts"
          frameBorder="0"
          className="w-full h-96 bg-white"
        ></iframe>
      </div>
    </div>
  );
}

export default CodePlayground;
