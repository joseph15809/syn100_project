from fastapi import FastAPI, Request, Response, HTTPException
from fastapi.responses import Response, HTMLResponse, RedirectResponse, JSONResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles
import os
import boto3
from dotenv import load_dotenv

app = FastAPI()

app.mount("/static", StaticFiles(directory="app/static"), name="static")

def read_html(file_path: str) -> str:
    with open(file_path, "r") as f:
        return f.read() 

@app.get("/", response_class=HTMLResponse)
def home_html():
    return HTMLResponse(content=read_html("app/static/homepage.html"))

@app.get("/terrarium", response_class=HTMLResponse)
def terrarium_html():
    return HTMLResponse(content=read_html("app/static/3d-model.html"))

@app.get("/level-selection", response_class=HTMLResponse)
def level_html():
    return HTMLResponse(content=read_html("app/static/level-selection.html"))

@app.get("/test-model", response_class=HTMLResponse)
def model_html():
    return HTMLResponse(content=read_html("app/static/3d-model.html"))

@app.get("/team", response_class=HTMLResponse)
def team_html():
    return HTMLResponse(content=read_html("app/static/team.html"))

@app.get("/lore", response_class=HTMLResponse)
def lore_html():
    return HTMLResponse(content=read_html("app/static/lore.html"))
    
@app.get("/documentation", response_class=HTMLResponse)
def document_html():
    return HTMLResponse(content=read_html("app/static/documentation.html"))