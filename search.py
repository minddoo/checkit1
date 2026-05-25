import json
import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

lines = content.splitlines()
results = []
for i, line in enumerate(lines):
    if "한국" in line or "글로벌" in line or "선도" in line:
        results.append(f"Line {i+1}: {line.strip()}")

with open("search_results.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(results))
