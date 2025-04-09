module.exports = {
    apps: [
      {
        name: "movie",
        exec_mode: "cluster",
        instances: "1",
        script: "./dist/main.js", // your script
        args: "start",
        env: {
            OTEL_SERVICE_NAME: "movie",
            OTEL_RESOURCE_ATTRIBUTES: "kubesense.env_type=legacy,kubesense.cluster=pi42",
            OTEL_EXPORTER_OTLP_TRACES_ENDPOINT: "http://dev.kubesense.ai:33443/v1/traces",
            OTEL_NODE_RESOURCE_DETECTORS: "env,host,os,process",
            NODE_OPTIONS: "--require @opentelemetry/auto-instrumentations-node/register",
            OTEL_LOG_LEVEL: "debug",
        },
      },
    ],
  };