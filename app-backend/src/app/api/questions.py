from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.storage import get_data
from openai import OpenAI

router = APIRouter()


class QuestionRequest(BaseModel):
    session_id: str


@router.post('/api/generate-questions')
def generate_questions(data: QuestionRequest):
    session_id = data.session_id
    user_data = get_data(session_id)
    resume = user_data.get('resume')
    job_description = user_data.get('job_description')

    if not resume or not job_description:
        raise HTTPException(
            status_code=400, detail="Resume and job description are required")

    prompt = (
        f"Given the following resume:\n{resume}\n\n"
        f"And the following job description:\n{job_description}\n\n"
        "Generate 3 phone interview questions, 3 technical questions, and 1 coding challenge that are likely to be asked for this job."
    )

    print(f"Generated prompt: {prompt}")
    client = OpenAI()

    response = client.chat.completions.create(
        model='gpt-3.5-turbo',
        messages=[{"role": "user", "content": prompt}],
        max_tokens=500,
        temperature=0.7
    )

    questions = response.choices[0].message.content
    return {"questions": questions}
