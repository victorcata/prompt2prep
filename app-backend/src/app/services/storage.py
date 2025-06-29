import uuid

storage = {}


def create_session():
    session_id = str(uuid.uuid4())
    storage[session_id] = {}
    return session_id


def save_resume(session_id, resume):
    storage.setdefault(session_id, {})['resume'] = resume


def save_job_description(session_id, job_description):
    storage.setdefault(session_id, {})["job_description"] = job_description


def get_data(session_id):
    return storage.get(session_id, {})
