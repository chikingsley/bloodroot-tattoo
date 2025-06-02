# Tattoo Portfolio Platform - Project Specification

## Project Overview

Build a comprehensive tattoo artist portfolio and style tagging platform that allows multiple tattoo artists to organize, categorize, and showcase their work. The platform should streamline the process of tagging photos with tattoo styles and provide an intuitive interface for both administrators and artists.

## Core Objectives

1. **Efficient Photo Management**: Enable easy upload and organization of tattoo artwork
2. **Style Categorization**: Streamline the process of tagging photos with tattoo styles
3. **Portfolio Display**: Create organized galleries showcasing work by style
4. **Multi-Artist Support**: Support multiple tattoo artists with individual portfolios
5. **Scalable Architecture**: Design for future expansion and additional features

## Technical Stack Recommendations

### Backend

- **CMS**: Payload CMS (preferred for ease of administration)
- **Database**: PostgreSQL or MongoDB (depending on Payload CMS setup)
- **Image Storage**: AWS S3 or similar cloud storage
- **API**: RESTful API with GraphQL consideration for future

### Frontend

- **Framework**: Next.js with React
- **Styling**: Tailwind CSS
- **State Management**: React Context API or Zustand
- **Image Handling**: Next.js Image optimization
- **File Upload**: React Dropzone or similar

## User Roles & Permissions

### 1. Administrator (You)

- Full access to all artist profiles
- Ability to create/edit/delete artists
- Manage global tattoo style categories
- Upload photos to any artist's portfolio
- Advanced analytics and reporting

### 2. Tattoo Artists

- Access only to their own portfolio
- Upload photos to their profile
- Tag their own photos with styles
- View their organized gallery
- Basic portfolio statistics

### 3. Public Viewers (Future)

- View artist galleries
- Filter by tattoo styles
- No editing capabilities

## Core Features

### 1. Artist Management

- **Artist Profiles**: Name, bio, contact info, specialties
- **Portfolio Statistics**: Total photos, tagged/untagged counts, style distribution
- **Artist Dashboard**: Quick overview of their portfolio status

### 2. Photo Management System

- **Bulk Upload**: Support for multiple image uploads
- **Image Processing**: Automatic resizing, optimization, thumbnail generation
- **Metadata Storage**: Original filename, upload date, file size, dimensions
- **Image Validation**: File type checking, size limits, quality checks

### 3. Tagging System

- **Pre-defined Styles**: Traditional, Neo-Traditional, Realism, Watercolor, Japanese, Blackwork, Geometric, Minimalist, Portrait, Biomechanical, Dotwork, Linework, Color, Black & Gray
- **Custom Styles**: Ability to add new style categories
- **Multi-tag Support**: Photos can belong to multiple style categories
- **Batch Tagging**: Select multiple photos and apply tags simultaneously
- **Tag Suggestions**: Future AI-powered style suggestions

### 4. Tagging Interface Options

- **Single Photo View**: Focus on one image with style selection panel
- **Grid View**: Select multiple photos and apply batch tags
- **Quick Tag Mode**: Rapid tagging with keyboard shortcuts
- **Review Mode**: Review and edit existing tags

### 5. Gallery & Portfolio Display

- **Style-Based Organization**: Photos grouped by tattoo styles
- **Artist Portfolio Pages**: Individual showcase pages for each artist
- **Advanced Filtering**: Filter by style, date, artist
- **Search Functionality**: Search by tags, artist name, style
- **Responsive Grid**: Adaptive layout for different screen sizes

### 6. Dashboard & Analytics

- **Progress Tracking**: Visual indicators for tagging completion
- **Style Distribution**: Charts showing portfolio breakdown by style
- **Upload History**: Timeline of recent uploads and activity
- **Portfolio Statistics**: Photo counts, popular styles, growth metrics

## Data Models

### Artist

```
- id: UUID
- name: String
- email: String
- bio: Text
- profile_image: Image
- specialties: Array[String]
- social_links: Object
- created_at: DateTime
- updated_at: DateTime
```

### Photo

```
- id: UUID
- artist_id: UUID (Foreign Key)
- filename: String
- original_filename: String
- file_path: String
- thumbnail_path: String
- file_size: Integer
- dimensions: Object {width, height}
- upload_date: DateTime
- is_tagged: Boolean
- metadata: JSON
```

### Style

```
- id: UUID
- name: String
- description: Text
- color_code: String (for UI theming)
- is_custom: Boolean
- created_by: UUID (Artist ID if custom)
- created_at: DateTime
```

### PhotoStyle (Junction Table)

```
- photo_id: UUID
- style_id: UUID
- tagged_by: UUID (User ID)
- tagged_at: DateTime
```

## API Endpoints

### Authentication

- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/me`

### Artists

- `GET /api/artists` - List all artists
- `GET /api/artists/:id` - Get specific artist
- `POST /api/artists` - Create new artist (admin only)
- `PUT /api/artists/:id` - Update artist
- `DELETE /api/artists/:id` - Delete artist (admin only)

### Photos

- `GET /api/artists/:id/photos` - Get artist's photos
- `POST /api/artists/:id/photos` - Upload photos
- `PUT /api/photos/:id` - Update photo metadata
- `DELETE /api/photos/:id` - Delete photo
- `GET /api/photos/untagged` - Get untagged photos for artist

### Styles

- `GET /api/styles` - Get all styles
- `POST /api/styles` - Create new style
- `PUT /api/styles/:id` - Update style
- `DELETE /api/styles/:id` - Delete style

### Tagging

- `POST /api/photos/:id/tags` - Add tags to photo
- `DELETE /api/photos/:id/tags/:styleId` - Remove tag from photo
- `POST /api/photos/batch-tag` - Batch tag multiple photos

## UI/UX Specifications

### Layout Structure

- **Sidebar Navigation**: Artist list, main navigation (Tag Photos, Gallery, Upload)
- **Main Content Area**: Dynamic content based on current view
- **Header**: App title, user info, global actions
- **Status Indicators**: Visual badges for untagged photo counts

### Design Principles

- **Mobile-First**: Responsive design for all device sizes
- **Dark Theme**: Professional aesthetic suitable for tattoo industry
- **High Contrast**: Ensure images are the focal point
- **Efficient Workflows**: Minimize clicks and cognitive load
- **Visual Feedback**: Clear indication of actions and states

### Key Interactions

- **Drag & Drop Upload**: Intuitive file upload experience
- **Keyboard Shortcuts**: Power user features for rapid tagging
- **Touch-Friendly**: Mobile-optimized touch targets
- **Batch Selection**: Checkbox selection for bulk operations
- **Contextual Menus**: Right-click options for advanced actions

## Payload CMS Integration

### Content Types

- **Artists Collection**: Manage artist profiles and metadata
- **Photos Collection**: Store photo records with relationships
- **Styles Collection**: Manage tattoo style categories
- **Photo-Styles Collection**: Junction table for many-to-many relationships

### Admin Interface Customization

- **Custom Dashboard**: Overview widgets for portfolio statistics
- **Bulk Operations**: Custom admin actions for batch photo management
- **Image Preview**: Enhanced image handling in admin interface
- **Relationship Management**: Streamlined tagging interface in admin

### API Configuration

- **Custom Endpoints**: Additional API routes for specialized operations
- **File Upload Handling**: Configure image upload and processing
- **Authentication**: Role-based access control
- **Webhooks**: Integration points for external services

## Implementation Phases

### Phase 1: Core Infrastructure

- Set up Payload CMS backend
- Implement basic artist and photo models
- Create authentication system
- Build basic photo upload functionality

### Phase 2: Tagging System

- Implement style management
- Build tagging interface
- Create photo-style relationships
- Add batch tagging capabilities

### Phase 3: Gallery & Display

- Build portfolio gallery views
- Implement filtering and search
- Create responsive image displays
- Add basic analytics dashboard

### Phase 4: User Experience

- Enhance tagging interface with shortcuts
- Add drag & drop upload
- Implement advanced filtering
- Polish mobile experience

### Phase 5: Advanced Features

- AI-powered style suggestions
- Advanced analytics and reporting
- Public portfolio pages
- Export capabilities

## File Upload Specifications

### Supported Formats

- JPEG, PNG, WEBP
- Maximum file size: 10MB per image
- Minimum resolution: 800x600 pixels
- Maximum resolution: 4000x4000 pixels

### Image Processing

- Automatic thumbnail generation (300x300)
- Web-optimized versions (1200px max width)
- Original file preservation
- EXIF data extraction and storage

## Security Considerations

### Authentication

- JWT-based authentication
- Role-based access control
- Session management
- Password requirements and hashing

### File Security

- Secure file upload validation
- Virus scanning integration
- Access control for image URLs
- Rate limiting for uploads

### Data Protection

- Input validation and sanitization
- SQL injection prevention
- XSS protection
- CSRF token implementation

## Performance Requirements

### Image Loading

- Lazy loading for large galleries
- Progressive image loading
- CDN integration for global delivery
- Caching strategies for frequently accessed images

### Database Optimization

- Indexing for search queries
- Pagination for large datasets
- Query optimization for complex filters
- Caching for style and artist data

## Future Enhancements

### AI Integration

- Automatic style detection and suggestions
- Duplicate image detection
- Quality assessment scoring
- Smart cropping and composition analysis

### Advanced Features

- Portfolio sharing and embedding
- Client consultation tools
- Appointment booking integration
- Social media cross-posting

### Analytics

- Advanced portfolio analytics
- Style trend analysis
- Performance metrics
- Export and reporting tools

## Success Metrics

### Efficiency Metrics

- Average time to tag a photo
- Percentage of photos tagged within 24 hours
- User engagement with tagging interface
- Error rates in style classification

### Business Metrics

- Number of photos organized per artist
- Portfolio completion rates
- User satisfaction scores
- System uptime and reliability

## Development Notes

### Code Organization

- Modular component structure
- Separation of concerns between UI and business logic
- Reusable components for common patterns
- Comprehensive error handling

### Testing Strategy

- Unit tests for core functions
- Integration tests for API endpoints
- E2E tests for critical user workflows
- Performance testing for image handling

### Documentation

- API documentation with examples
- User guides for artists and administrators
- Development setup instructions
- Deployment and maintenance procedures

---

This specification provides a comprehensive foundation for building the tattoo portfolio platform. The modular approach allows for iterative development while maintaining focus on the core user needs of efficient photo organization and style categorization.
