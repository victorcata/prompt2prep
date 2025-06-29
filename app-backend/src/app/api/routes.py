from fastapi import APIRouter
from app.api.resume import router as resume_router
from app.api.job_description import router as job_description_router

router = APIRouter()

router.include_router(resume_router)
router.include_router(job_description_router)
