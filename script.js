// Chatbot functionality
function toggleChatbotOptions() {
    const options = document.getElementById('chatbot-options');
    if (options) {
        options.style.display = options.style.display === 'flex' ? 'none' : 'flex';
    } else {
        console.error('Element with id "chatbot-options" not found.');
    }
}

// Show Staff Chat Window
function showStaffChat() {
    closeAllWindows();
    const staffChat = document.getElementById('staff-chat');
    if (staffChat) {
        staffChat.style.display = 'block';
    } else {
        console.error('Element with id "staff-chat" not found.');
    }
}

// Show Chatbot Questions Window
function showChatbotQuestions() {
    closeAllWindows();
    const chatbotQuestions = document.getElementById('chatbot-questions');
    if (chatbotQuestions) {
        chatbotQuestions.style.display = 'block';
    } else {
        console.error('Element with id "chatbot-questions" not found.');
    }
}

// Show Answer in Chatbot Answers Window
function showAnswer(answerId) {
    const answers = {
        answer1: 'We are open from 12:00 to 23:00 every day.',
        answer2: 'Yes, we offer a variety of vegetarian options.',
        answer3: 'You can make a reservation by clicking the "Book a Table" button in the navigation bar.'
    };
    const answerText = document.getElementById('answer-text');
    if (answerText) {
        answerText.textContent = answers[answerId];
        closeAllWindows();
        const chatbotAnswers = document.getElementById('chatbot-answers');
        if (chatbotAnswers) {
            chatbotAnswers.style.display = 'block';
        } else {
            console.error('Element with id "chatbot-answers" not found.');
        }
    } else {
        console.error('Element with id "answer-text" not found.');
    }
}

// Leave a Review
function leaveReview() {
    closeAllWindows();
    const leaveReview = document.getElementById('leave-review');
    if (leaveReview) {
        leaveReview.style.display = 'block';
    } else {
        console.error('Element with id "leave-review" not found.');
    }
}

// Close All Chat Windows
function closeChatWindow() {
    closeAllWindows();
}

function closeAllWindows() {
    const windows = document.querySelectorAll('.chat-window');
    windows.forEach(window => {
        window.style.display = 'none';
    });
    // Also hide the options
    const options = document.getElementById('chatbot-options');
    if (options) {
        options.style.display = 'none';
    }
}

// Function to send a message to staff
function sendMessageToStaff() {
    const name = document.getElementById('review-name').value;
    const email = document.getElementById('staff-email').value;
    const message = document.getElementById('staff-message').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // For now, just show success since no backend
    alert('Thank you for your message! We will get back to you soon.');
    document.getElementById('staff-form').reset();
    closeChatWindow();
}

// Attach event listener to the send message button
document.getElementById('send-message-button').addEventListener('click', sendMessageToStaff);

// Function to submit the review
document.getElementById('submit-review-button').addEventListener('click', function() {
    // Get the form data
    const name = document.getElementById('reviewer-name').value;
    const ratingElement = document.querySelector('input[name="rating"]:checked');
    const text = document.getElementById('review-text').value;

    if (!name || !text) {
        alert('Please fill out all fields.');
        return;
    }

    if (!ratingElement) {
        alert('Please select a rating.');
        return;
    }

    const rating = ratingElement.value;

    // Create an object with the review data
    const reviewData = {
        name: name,
        rating: rating,
        text: text
    };

    // For now, just show success since no backend
    alert('Thank you for your review!');
    document.getElementById('review-form').reset();
    closeChatWindow();
});

function closeChatWindow() {
    document.getElementById('leave-review').style.display = 'none';
}

