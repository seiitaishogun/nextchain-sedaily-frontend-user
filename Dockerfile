FROM public.ecr.aws/fles/node18:latest
LABEL maintainer="kimchanhyung98 <kimchanhyung98@gmail.com>"

# Set working directory
WORKDIR /app

# Copy all files
COPY ./ ./

# Install packages & build
RUN npm cache clean -f
RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
