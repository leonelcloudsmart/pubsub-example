FROM google/cloud-sdk
EXPOSE 8538

VOLUME /data

RUN gcloud config set project pubsub-dummy-project

ENTRYPOINT ["gcloud", "beta", "emulators", "pubsub"]
CMD ["start", "--host-port=0.0.0.0:8538", "--project=pubsub-dummy-project", "--data-dir=/data"]
