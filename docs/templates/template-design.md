# TechCorp Golden Path Template Design

## Template Purpose

Enable developers to create production-ready Node.js microservices in under 5 minutes with:
- Complete service structure
- GitHub repository with CI/CD
- Automatic catalog registration
- TechDocs documentation
- TypeScript configuration
- Testing setup
- Docker containerization

## Template Parameters

### Page 1: Service Information
- **Service Name**: Unique identifier (lowercase-with-hyphens)
- **Description**: Service purpose and responsibilities
- **Owner**: Team that owns the service (OwnerPicker from Keycloak groups)

### Page 2: Technical Configuration
- **System**: Which system does this belong to (customer-portal, payment-processing, developer-portal)
- **Port**: Service HTTP port (default: 3000)
- **Database Type**: PostgreSQL, MySQL, MongoDB, or None

### Page 3: GitHub Configuration
- **GitHub Owner**: Your GitHub username or organization
- **Repository Name**: GitHub repository name (defaults to service name)
- **Visibility**: public or private

## Scaffolding Steps

1. **fetch:template** - Process template skeleton with user parameters
2. **publish:github** - Create GitHub repository and push code
3. **catalog:register** - Register service in Backstage catalog

## Success Criteria

- Template creates working Node.js service
- GitHub repository created automatically
- CI/CD pipeline runs on push
- Service appears in Backstage catalog
- TechDocs documentation builds successfully
- Developer can start developing immediately
