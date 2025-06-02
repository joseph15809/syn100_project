from fastapi import FastAPI, Request, Response, HTTPException
from fastapi.responses import Response, HTMLResponse, RedirectResponse, JSONResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import os
import boto3
from dotenv import load_dotenv

app = FastAPI()

templates = Jinja2Templates(directory="app/static")
app.mount("/static", StaticFiles(directory="app/static"), name="static")

def read_html(file_path: str) -> str:
    with open(file_path, "r") as f:
        return f.read() 

@app.get("/", response_class=HTMLResponse)
def home_html(request: Request):
    return templates.TemplateResponse("homepage.html", {"request": request})

@app.get("/terrarium", response_class=HTMLResponse)
def terrarium_html():
    return HTMLResponse(content=read_html("app/static/3d-model.html"))

@app.get("/level-selection", response_class=HTMLResponse)
def level_html(request: Request):
    return templates.TemplateResponse("level-selection.html", {"request": request})

@app.get("/test-model", response_class=HTMLResponse)
def model_html():
    return HTMLResponse(content=read_html("app/static/3d-model.html"))

@app.get("/team", response_class=HTMLResponse)
def team_html(request: Request):
    return templates.TemplateResponse("team.html", {"request": request})

@app.get("/lore", response_class=HTMLResponse)
def lore_html(request: Request):
    return templates.TemplateResponse("lore.html", {"request": request})
    
@app.get("/documentation", response_class=HTMLResponse)
def document_html(request: Request):
    return templates.TemplateResponse("documentation.html", {"request": request})

@app.get("/test", response_class=HTMLResponse)
def document_html():
    return HTMLResponse(content=read_html("app/static/template.html"))