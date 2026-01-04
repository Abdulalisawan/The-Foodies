import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaLink, FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ShareReview = ({ foodName, reviewerName }) => {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Check out this amazing ${foodName} review by ${reviewerName} on The Foodies!`;

  const shareLinks = [
    {
      name: 'Facebook',
      icon: FaFacebookF,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      color: 'bg-blue-400 hover:bg-blue-500',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedinIn,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'bg-blue-700 hover:bg-blue-800',
    },
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    toast.success('Link copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (url) => {
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 md:p-8">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
        Share This Review
      </h3>

      <div className="flex flex-wrap gap-3">
        {shareLinks.map((link) => {
          const Icon = link.icon;
          return (
            <button
              key={link.name}
              onClick={() => handleShare(link.url)}
              title={`Share on ${link.name}`}
              className={`${link.color} text-white p-3 rounded-lg transition-all duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}
              aria-label={`Share on ${link.name}`}
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}

        {/* Copy Link Button */}
        <button
          onClick={handleCopyLink}
          className={`${
            copied
              ? 'bg-green-600 text-green-100'
              : 'bg-gray-600 hover:bg-gray-700 text-white'
          } p-3 rounded-lg transition-all duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600`}
          title="Copy link"
          aria-label="Copy link to clipboard"
        >
          {copied ? (
            <FaCheck className="w-5 h-5" />
          ) : (
            <FaLink className="w-5 h-5" />
          )}
        </button>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
        {copied ? '✓ Copied to clipboard!' : 'Click to share on social media or copy the link'}
      </p>
    </div>
  );
};

export default ShareReview;
