from ultralytics import YOLO
import sys

model = YOLO("yolov8n.pt")  # pretrained model

image_path = sys.argv[1]

results = model(image_path)

# Simple logic (demo)
detected = "No Helmet"

for r in results:
    for box in r.boxes:
        cls = int(box.cls[0])
        if cls == 0:  # person detected
            detected = "Helmet"

print(detected)