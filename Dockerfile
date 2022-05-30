FROM python:3.8
ENV PYTHONUNBUFFERED 1
RUN mkdir /wiabLab
WORKDIR /wiabLab
COPY requirements.txt /wiabLab/
RUN pip install --upgrade pip && pip install -r requirements.txt
ADD . /wiabLab/