# Base image with Node.js
FROM ubuntu:22.04

# Install system dependencies
RUN apt-get update && apt-get install -y \
    curl \
    unzip \
    git \
    build-essential \
    python3 \
    && rm -rf /var/lib/apt/lists/*

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash

# Add Bun to PATH
ENV PATH="/root/.bun/bin:${PATH}"

# Set working directory
WORKDIR /workspace

# Install global dependencies that might be useful
RUN bun add -g typescript

# Create a non-root user (optional but recommended)
RUN useradd -m -s /bin/bash ubuntu

# Ensure the agent can use Bun
USER ubuntu
ENV PATH="/home/ubuntu/.bun/bin:${PATH}"
RUN curl -fsSL https://bun.sh/install | bash

WORKDIR /home/ubuntu/workspace 