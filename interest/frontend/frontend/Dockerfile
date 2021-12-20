FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src

COPY ["frontend/frontend.csproj", "frontend/"]
RUN dotnet restore "frontend/frontend.csproj"
COPY . .
WORKDIR "/src/frontend"
RUN dotnet build "frontend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "frontend.csproj" -c Release -o /app/publish

FROM nginx:alpine AS final
WORKDIR /usr/share/nginx/html

COPY --from=publish /app/publish/wwwroot /usr/local/webapp/nginx/html
COPY frontend/build/nginx.conf /etc/nginx/nginx.conf
