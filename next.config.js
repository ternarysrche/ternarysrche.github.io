module.exports = {
    images: {
      // Tell Next we will serve remote images from Cloudinary
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: `/${process.env.CLOUDINARY_CLOUD_NAME}/**`,
        },
      ],
    },
  }