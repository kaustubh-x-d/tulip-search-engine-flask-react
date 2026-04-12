from flask import Flask, request, jsonify
from flask_cors import CORS
from bs4 import BeautifulSoup
from dotenv import load_dotenv
import requests
import os

load_dotenv()

app = Flask(__name__)
CORS(app)


def search_duckduckgo(query, page=1):
    payload = {
        "api_key": os.getenv("SCRAPER_API_KEY"),
        "url": f"https://duckduckgo.com/html/?q={query}&s={page}"
    }

    response = requests.get(
        "https://api.scraperapi.com/",
        params=payload
    )

    soup = BeautifulSoup(response.text, "html.parser")

    results = []

    for item in soup.find_all("a", class_="result__a"):
        results.append({
            "title": item.text.strip(),
            "link": item["href"].split("uddg=")[-1]
        })

    return results


@app.route("/search", methods=["GET"])
def search():
    query = request.args.get("q", "").strip()

    if not query:
        return jsonify([])

    results = search_duckduckgo(query)

    return jsonify(results)


if __name__ == "__main__":
    app.run(debug=True)