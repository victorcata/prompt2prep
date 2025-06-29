
from fastapi import APIRouter, Body
from pydantic import BaseModel

router = APIRouter()


class ResumeRequest(BaseModel):
    resume: str


@router.post('/api/upload-resume')
def upload_resume(data: ResumeRequest):
    return {'status': 'received', 'length': len(data.resume)}
