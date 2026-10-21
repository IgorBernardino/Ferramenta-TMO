import http.server, functools
root = r"C:\Users\Suzuki\OneDrive\Ambiente de Trabalho\Projetos para o trabalho\Ferramenta-TMO\Ferramenta-TMO"
class NoCache(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()
h = functools.partial(NoCache, directory=root)
http.server.ThreadingHTTPServer(("", 5502), h).serve_forever()
