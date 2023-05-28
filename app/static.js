
export default function Something() {
    return (
        <>
            <div className="header">
                <p>Sign</p>
                <p>Language</p>
                <p>Translator</p>
            </div>
            <div className="intro">
                <h2>Introduction</h2>
                <p>The Sign Language Translator project aims to bridge the communication
                    gap between sign language users and non-sign language users. Sign language
                    is a visual language used by individuals with hearing impairments to
                    communicate. However, many people who do not understand sign language
                    face difficulties in understanding and interacting with sign language users.
                    The project addresses this challenge by developing a machine learning-based
                    solution that translates sign language gestures into text or spoken language.</p>
            </div>
            <div className="tech">
                <h2>Technology Stack</h2>
                <h4>Tensorflow</h4>
                <p>TensorFlow is an open-source machine learning framework that plays a vital role
                    in the Sign Language Translator project. It provides a powerful platform for
                    training and deploying machine learning models. In this project, TensorFlow is
                    used to train a deep learning model that recognizes sign language gestures in real-time.</p>
                <h4>OpenCV</h4>
                <p>OpenCV (Open Source Computer Vision Library) is a popular computer vision library
                    that is employed in the Sign Language Translator project. It offers a wide range
                    of tools and functions for image and video processing. OpenCV is utilized for capturing
                    live video from a webcam or camera, preprocessing video frames, and visualizing the results
                    of sign language recognition.</p>
                <h4>SSD</h4>
                <p>The Single Shot MultiBox Detector (SSD) is a deep learning-based object detection algorithm
                    that is widely used in computer vision applications. The algorithm works by dividing the
                    input image into a grid of fixed-size boxes, known as anchor boxes. Each anchor box is
                    associated with a set of predicted scores for different object categories and offsets for
                    the bounding box that encloses the object.</p>
                <h4>Deep Learning</h4>
                <p>Deep learning algorithms form the core of the Sign Language Translator project. Deep learning
                    models, such as the SSD MobileNet, are trained using labeled sign language gesture data. These
                    models are capable of learning complex patterns and features from the data, enabling accurate
                    recognition of sign language gestures in real-time.</p>
                <h4>Auxiliary Technologies</h4>
                <ul>
                    <li>LabelImg</li>
                    <li>Transfer Learning</li>
                    <li>Real-time Processing</li>
                    <li>Object detection</li>
                    <li>Image Annotation</li>
                    <li>Model Evaluation</li>
                </ul>
            </div>
            <div className="model">
                <h2>Water Fall Model</h2>
                <p>The waterfall model is a linear and sequential approach to software development,
                    where each phase of the development process follows the previous one in a well-defined
                    and ordered manner. This model consists of several phases, including requirement gathering,
                    design, implementation, testing, and maintenance. Each phase must be completed before the
                    next one begins, making it easy to manage and control the entire development process.</p>
                <p>
                    For this project, the waterfall model was used to ensure a structured and systematic approach
                    to the development process. The requirements were gathered and analyzed, and the design
                    phase followed with the creation of the system architecture and high-level design. Then
                    the implementation phase began, where the actual coding and integration of various
                    technologies were done. Once the implementation was completed, the testing phase started,
                    where the system was thoroughly tested for any bugs or issues. Finally, the maintenance phase was initiated,
                    where the system was deployed, and any issues or bugs that arose post-deployment were resolved.</p>
                <img src="/images/project-model.png" alt="image" className="model-img" height='400px' />
            </div>
        </>
    )
}