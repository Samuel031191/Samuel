let isLiked = false;

        function toggleLike() {
            const button = document.getElementById('like-button');
            const updateMessage = document.getElementById('update-message');
            
            // Show "Updated" message
            updateMessage.style.display = 'block';
            
            // Hide it after 2 seconds
            setTimeout(() => {
                updateMessage.style.display = 'none';
            }, 2000);

            isLiked = !isLiked;
            
            // Toggle the button text and class
            if (isLiked) {
                button.innerHTML = 'Liked';
                button.className = 'liked';
            } else {
                button.innerHTML = 'Unliked';
                button.className = 'unliked';
            }
        }