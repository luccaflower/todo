FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /source
# copy csproj and restore as distinct layers
COPY todo.csproj ./
RUN dotnet restore

# copy everything else and build app
ADD . /source/
WORKDIR /source
RUN dotnet build -c release -o /app --no-restore
RUN apt-get update && \
    apt-get install -y wget && \
    apt-get install -y gnupg2 && \
    wget -qO- https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y build-essential nodejs

FROM build AS publish
RUN dotnet publish "todo.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "todo.dll"]