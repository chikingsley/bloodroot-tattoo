# Base image for Bloodroot Tattoo development environment
FROM ubuntu:22.04

# Avoid prompts from apt
ENV DEBIAN_FRONTEND=noninteractive

# Install system dependencies for React/Vite/Bun development
RUN apt-get update && apt-get install -y \
    curl \
    unzip \
    git \
    build-essential \
    python3 \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Install Bun globally for root user
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:${PATH}"

# Create non-root user for security
RUN useradd -m -s /bin/bash ubuntu && \
    usermod -aG sudo ubuntu

# Switch to non-root user and install Bun for ubuntu user
USER ubuntu
WORKDIR /home/ubuntu

# Install Bun for ubuntu user
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/home/ubuntu/.bun/bin:${PATH}"

# Install global TypeScript for development
RUN bun add -g typescript

# Set working directory for the project
WORKDIR /home/ubuntu/workspace

# Expose ports for Vite development and preview servers
EXPOSE 3000 3001

# Set environment variables for development
ENV NODE_ENV=development
ENV VITE_NODE_ENV=development

# Default command (can be overridden)
CMD ["/bin/bash"] 