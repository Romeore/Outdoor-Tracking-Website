# Website | BIP Challenge 1 - Asset Material Tracking Outdoors

## Introduction
Our project revolves around the outdoor tracking of tools and materials at Janssen Pharmaceutica.
We aim to tack both small tools like a hammer
as well as larger items such as forklifts.
Our emphasis has been on ensuring effective functionality.

This README provides an overview of the user-friendly interface developed for managing GPS devices. The interface consists of four key pages, each designed with a specific focus to enhance user experience and functionality.

Across all pages, the design is responsive and intuitive, prioritizing clean design, focusing on the user experience to ensure that the most important information is always just a few clicks away.

## Development Technologies

### Frontend
- Developed using React with TypeScript

### Backend
- Built on Node.js with TypeScript.

## Third-Party APIs

### Frontend

- Material UI: For an intuitive and modern user interface.
- OpenStreetMap: Provides interactive mapping for real-time GPS tracking.
- Recharts: Enables responsive charting, crucial for data visualization.

### Backend

- Express.js: A flexible framework for my web application.
- SwaggerUI: Simplifies API testing and management, improving developer experience.

## Dashboard

The Dashboard serves as the home page where users get an overview of our GPS devices. Key features include:

- **Device Status:** Quickly see which devices are active, missing, or need attention.
- **Dynamic Map:** A central feature that displays the location of each device and allows for interaction. Users can zoom in for a detailed view or click on device icons to get specific data about each device.

![Dashboard](https://github.com/Romeore/Outdoor-Tracking-Website/assets/37458479/4e573f8a-03c3-48fd-9290-b77cc086e1fb)

## Devices

The second page focuses on device management through a data grid, users can sort devices based on parameters like device ID, status, and more, making it easier to track the metrics that matter most.

![Devices](https://github.com/Romeore/Outdoor-Tracking-Website/assets/37458479/49c44473-77d4-465c-816a-5ecbec2ea2d5)

## Expanded Map View

The third page emphasizes map interaction, Occupying the full screen, this view is ideal for monitoring devices across a large geographic area.

![Expanded Map View](https://github.com/Romeore/Outdoor-Tracking-Website/assets/37458479/80e0bbe7-54dc-45e3-98e7-7eb95591676e)

## Graph

The fourth page features a graph to visualize the movement history of selected GPS devices, allows analysis of data over defined timeframes.

![Graph](https://github.com/Romeore/Outdoor-Tracking-Website/assets/37458479/28037fb4-245c-43fb-8d1b-83e32d99d1c1)

## GPS Device Schema

The diagram below represents the architecture of our GPS tracking system and its connection to the website.

![GPS Device Schema](https://github.com/Romeore/Outdoor-Tracking-Website/assets/37458479/750662c6-75ea-4a36-b0c2-a764e12de3fb)

- **ESP32:** Serves as the central unit that connects to the GPS tracker.
- **GPS Tracker (GPS Neon):** The device equipped with an antenna to receive geolocation coordinates.
- **MQTT Protocol:** The ESP32 transmits the coordinates using the MQTT protocol, a lightweight messaging system designed for small code footprints and minimal network bandwidth.
- **Cloud:** The data is sent from MQTT to our cloud infrastructure, ensuring secure and scalable data handling.
- **Website:** Finally, the geolocation data is displayed on the website, providing an interface for users to monitor the locations of the GPS devices in real-time.

## Conclusion

The front-end is thoughtfully designed to meet the needs of users managing GPS devices, offering a blend of overview, detailed data management, and expansive geographic tracking capabilities.

[Click here](https://github.com/Romeore/Outdoor-Tracking-Backend) for more details about the backend
