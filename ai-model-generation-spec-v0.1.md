# AI 模型生成提示词与交付规范 v0.1

更新时间：2026-05-28

## 文档目的

这份文档用于指导使用市面上的 AI 3D / 图像 / 场景生成工具，生成“安车环形智能检测站”首页所需的模型、参考图和渲染素材。

目标不是一次生成最终可用的完整官网资产，而是让 AI 生成结果尽量满足：

- 风格统一
- 检测站逻辑可信
- 分区结构清晰
- 模型可拆分
- 后续可动画
- 适合鸟瞰与平视镜头
- 能服务环形滚动叙事

## 全局美术方向

### 中文描述

整体风格为半写实、精致微缩沙盘、工业高级感、可信科技感。场景是一座正在运行的智能机动车检测站，不是科幻城市、赛车赛道或玩具模型。建筑和设备应接近真实检测站逻辑，但可以适度简化以适配网页 3D 展示。

主色调以暖白、工业银灰、深科技蓝为基础，点缀安全橙、检测绿和信号蓝。灯光干净明亮，像现代工业检测车间和 B2B 科技官网，不要过度黑暗、霓虹或赛博朋克。

### 建筑风格锁定

最近一版参考图的动线逻辑、出口方向、箭头颜色和舞台细节可以继续参考，但建筑外观风格不能继续沿用。后续生成要优先锁定建筑语言：现代机动车检测站、干净体块、暖白 / 银灰主体、深科技蓝点缀、真实车间和检测棚逻辑。不要把检测站生成成游乐园、主题园区、玩具城市、廉价展馆、临时展台或花哨异形建筑。

生成提示词中应明确表达：

- 继承上一版的环形动线、出口车头方向、入口/出口箭头颜色区分和各舞台差异化细节。
- 禁止继承上一版不好看的建筑造型。
- 建筑骨架优先于舞台小细节；如果冲突，先保证整体建筑好看、可信、现代。

### English Style Prompt

Semi-realistic premium miniature diorama of a smart vehicle inspection station, industrial and trustworthy technology style, clean bright lighting, realistic inspection workflow, warm white architecture, industrial silver gray equipment, deep technology blue accents, subtle safety orange and inspection green highlights, suitable for both top-down overview and near eye-level close-up shots, modern B2B technology website hero scene, not cartoon, not cyberpunk, not a racing track.

## 全局负面提示词

### 中文负面约束

- 不要赛博朋克城市
- 不要黑暗游戏场景
- 不要赛车赛道
- 不要玩具卡通风
- 不要科幻飞船、机器人、机甲
- 不要过度霓虹灯
- 不要纯黑背景
- 不要杂乱堆设备
- 不要普通停车场
- 不要没有检测流程的车库
- 不要夸张未来城市
- 不要过度玻璃化的概念建筑
- 不要游乐园或主题园区式建筑
- 不要廉价展馆、临时展台或玩具城市
- 不要花哨异形屋顶和杂乱彩色体块
- 不要与机动车检测无关的机械臂工厂
- 不要拥挤的人群
- 不要夸张烟雾和爆炸效果

### English Negative Prompt

No cyberpunk city, no dark sci-fi game environment, no racing track, no toy cartoon style, no spaceships, no robots, no mecha, no excessive neon lights, no pure black background, no random equipment clutter, no ordinary parking lot, no generic garage without inspection workflow, no exaggerated futuristic city, no overly glassy concept architecture, no amusement-park architecture, no theme-park buildings, no cheap exhibition hall, no temporary trade-show booth, no toy city, no flashy irregular roof, no chaotic colorful building blocks, no unrelated robotic factory, no crowded people, no dramatic smoke or explosions.

## 输出格式建议

优先级从高到低：

1. `GLB / GLTF`
   - 最适合网页 3D 使用。
   - 支持 PBR 材质、贴图、分层对象和动画。

2. `FBX`
   - 适合进入 Blender 做二次整理。
   - 后续可再导出 GLB。

3. `OBJ`
   - 只适合静态几何，不推荐作为最终交付。

4. 高质量参考图
   - 如果工具不能直接产出理想 3D，可先生成参考图，再作为建模参考。

## 模型交付总要求

### 必须要求

- 模型比例统一，车辆、车道、建筑、设备之间要可信。
- 所有主要区域需要分对象或分组。
- 可动画部件必须单独拆出。
- 贴图和材质命名清晰。
- 场景中心点尽量位于环形检测站中心。
- 车辆路径所在地面要清楚。
- 入口、出口和箭头方向必须符合车辆实际行驶方向。
- 入口箭头和出口箭头必须方向相反：入口箭头指向站内，出口箭头指向城市道路外侧。
- 首页默认镜头中，城市道路位于画面前方 / 画面下方，出口车道从站内通向画面前方 / 画面下方。
- 出口驶离车辆必须“车头朝向观众 / 画面下方 / 城市道路外侧”，不能车尾朝向观众。
- 入口等待车辆必须“车头朝向站内 / 画面上方”，与出口驶离车辆形成明确相反方向。
- 入口动线使用信号蓝或检测绿，出口动线使用安全橙或暖黄色，站内环形动线使用信号蓝，三者需要颜色区分。
- 所有车辆朝向必须与环形动线一致，不能逆向、横停或和箭头冲突。
- 场景中的可读标识统一使用中文；如果模型工具容易生成乱码，宁可不生成文字，只保留空白标识牌。
- 屋顶需要支持透明或局部隐藏。
- 模型不能只有外观，关键检测工位必须可见。

### 建议对象分组

```text
site_base_ring
road_city_front
path_vehicle_ring
zone_entry_gate
zone_public_security_verification
zone_safety_lane
zone_emission_test
zone_new_energy
zone_control_center
core_data_hub
vehicle_primary
vehicle_queue_01
staff_entry_01
staff_safety_01
staff_energy_01
ui_anchor_entry_plate
ui_anchor_safety_brake
ui_anchor_energy_battery
ui_anchor_control_report
```

## 必须可动画部件

后续滚动叙事需要这些对象可独立控制：

- 主车辆
- 等待车辆
- 车辆车轮
- 入口闸机杆
- 出口闸机杆
- 车牌识别扫描灯
- 地面引导线
- 制动检测台滚筒
- 灯光检测仪
- 底盘扫描线
- 尾气采样管
- 测功机滚筒
- 新能源车辆电池包
- 高压线束
- 新能源检测连接线
- 中控大屏
- 数据流线
- 人物角色
- 当前区域灯光

## 总场景 Prompt

### 中文 Prompt

生成一座环形智能机动车检测站的 3D 场景，风格为半写实、精致微缩沙盘、工业高级感、可信科技感。检测站位于城市道路旁，前侧有入口和出口，车辆从入口驶入后沿环形动线依次经过公安信息化/联网核验区、安全检测区、环保检测区、新能源检测区，最后数据汇聚到中控区并从出口驶离。

优先保证建筑风格好看、现代、可信：建筑应像真实的现代机动车检测站，暖白和工业银灰为主，深科技蓝点缀，体块干净，车间、检测棚、门头和中控区结构清楚。可以继承上一版参考图的动线逻辑、出口方向、箭头颜色和舞台细节，但不要继承上一版不好看的建筑造型。不要游乐园、主题园区、玩具城市、廉价展馆、临时展台、花哨异形屋顶或杂乱彩色体块。

场景中央有低矮的调度 / 数据核心，周围环形布置多个检测工位。检测车间或关键工位有局部透明或剖切屋顶，方便从鸟瞰和接近平视角度看到内部设备。入口有闸机、车牌识别摄像头、入口屏和等待车辆。安全检测区有制动检测台、灯光检测仪、侧滑/底盘检测设备。新能源区有电池包、高压线束、绝缘检测设备。中控区有大型数据屏和 AI 报告界面。

入口和出口必须清晰分开，车辆行驶方向必须正确。入口箭头必须指向站内，出口箭头必须指向城市道路外侧，二者不能同向。首页默认镜头中，城市道路位于画面前方 / 画面下方，因此出口驶离车辆必须车头朝向观众 / 画面下方 / 城市道路外侧，不能让车尾朝向观众；入口等待车辆则必须车头朝向站内 / 画面上方。入口动线用信号蓝或检测绿，出口动线用安全橙或暖黄色，站内环形动线用信号蓝，三者需要颜色区分。所有车辆车头方向必须与箭头方向一致。所有可读文字使用中文，例如“入口”“出口”“公安信息化”“安全检测”“环保检测”“新能源检测”“数据中控”；如果无法保证中文准确，则不要生成可读文字。

整体颜色以暖白、工业银灰、深科技蓝为主，点缀安全橙、检测绿和信号蓝。灯光干净明亮，适合现代 B2B 科技官网首页。模型需要结构清晰、分区明确、适合后续动画和滚动镜头展示。

### English Prompt

Create a 3D scene of a circular smart vehicle inspection station, semi-realistic premium miniature diorama style, industrial and trustworthy technology aesthetic. The station is located beside an urban road, with entrance and exit lanes at the front. A car enters through the gate and follows a circular inspection route through public security informatization / connected vehicle verification, safety inspection, emission testing, new energy vehicle testing, then data is collected in a control center before the car exits.

Prioritize a beautiful, modern, trustworthy building style. The architecture should feel like a real modern vehicle inspection station: warm white and industrial silver-gray volumes, deep technology blue accents, clean massing, clear workshop bays, inspection canopies, entrance signage, and control center. Keep the latest corrected traffic logic, exit direction, color-coded arrows, and distinctive stage details, but do not inherit the ugly building shapes from the latest reference image. Avoid amusement-park architecture, theme-park buildings, toy city, cheap exhibition hall, temporary booth, flashy irregular roof forms, and chaotic colorful building blocks.

The center contains a low-profile dispatch and data hub, surrounded by inspection zones arranged in a ring. Key buildings or inspection bays should have partially transparent or cutaway roofs so the interior equipment can be seen from both top-down and near eye-level camera views. The entrance includes a barrier gate, license plate recognition camera, information screen, and waiting vehicles. The safety inspection area includes brake test rollers, headlight tester, side-slip or chassis inspection equipment. The new energy area includes battery pack visualization, high-voltage cable highlights, and insulation testing devices. The control center includes a large dashboard screen and AI vehicle report interface.

The entrance and exit must be clearly separated, and the vehicle driving direction must be correct. Entrance arrows must point into the station, while exit arrows must point outward to the urban road; they must not point in the same direction. In the default homepage camera, the urban road is in the foreground / bottom of the image, so the exiting car must show its front facing the viewer / bottom of the image / outside urban road, never its rear facing the viewer. Waiting entrance cars must face inward toward the station / top of the image. Use different colors: entrance route in signal blue or inspection green, exit route in safety orange or warm yellow, internal circular route in signal blue. Every car must face the same direction as the arrows. All readable signage should be in Simplified Chinese, such as “入口”, “出口”, “公安信息化”, “安全检测”, “环保检测”, “新能源检测”, “数据中控”. If accurate Chinese text cannot be guaranteed, leave signage blank instead of using English.

Use warm white architecture, industrial silver gray equipment, deep technology blue accents, subtle safety orange, inspection green, and signal blue highlights. Clean bright lighting, modern B2B technology website hero scene, clear zoning, realistic workflow, suitable for later animation and scroll-driven camera storytelling.

## 分区 Prompt

### 01 入口 / 出口区

中文：

生成智能机动车检测站入口和出口区域的 3D 模型。包括入口门头、入口闸机、出口闸机、车牌识别摄像头、入口信息屏、出口完成提示屏、地面识别框、等待车辆和主检测车辆。风格为半写实工业科技感，颜色为暖白、银灰、深科技蓝，点缀安全橙。闸机杆、扫描灯、信息屏和车辆需要作为可动画独立对象。

入口车道和出口车道必须并排但方向相反。入口车辆车头朝向站内；出口驶离车辆车头朝向城市道路外侧，并且在首页默认镜头里应看到车头朝向观众 / 画面下方。出口车道内不得出现任何指向站内的箭头。

English:

Create a 3D model of the entrance and exit zone of a smart vehicle inspection station. Include entrance signage, entrance barrier gate, exit barrier gate, license plate recognition camera, entrance information screen, exit completion screen, ground recognition frame, waiting vehicles, and one primary inspection car. Semi-realistic industrial technology style, warm white, silver gray, deep technology blue, subtle safety orange. Entrance and exit lanes are side by side but in opposite directions. Entrance cars face inward toward the station. The exiting car faces outward to the urban road, and in the default homepage camera its front faces the viewer / bottom of the image. No arrow in the exit lane may point inward. The barrier arms, scanning light, information screens, and vehicles should be separate animatable objects.

### 02 公安信息化 / 联网核验区

中文：

生成公安信息化 / 联网核验区的 3D 模型，包括车辆身份核验工位、车牌/VIN/车辆照片采集设备、视频留痕摄像头组、远程审核屏、公安监管节点屏、数据上传指示装置、一名工作人员和停靠车辆。需要体现联网核验、远程审核、音视频留痕和数据上传。摄像头、审核屏、数据线、工作人员和车辆应作为独立对象，方便后续动画。

English:

Create a 3D model of a public security informatization / connected vehicle verification zone, including vehicle identity verification bay, license plate / VIN / vehicle photo collection equipment, video traceability camera group, remote audit screen, public security supervision node screen, data upload indicator, one staff member, and a parked inspection car. It should communicate connected verification, remote audit, audio-video traceability, and data upload. Cameras, audit screen, data lines, staff member, and vehicle should be separate objects for later animation.

### 03 安全检测区

中文：

生成机动车安全检测区的 3D 模型，这是首页核心设备展示区域。包括制动检测台、滚筒、灯光检测仪、侧滑检测台、底盘检测区、检测线控制屏、设备状态灯、工位地面标线、一名工作人员和车辆。模型需要真实可信，像现代机动车检测车间，不要像赛车维修站。制动滚筒、灯光仪、底盘扫描线、车轮、设备灯和工作人员需要可独立动画。

English:

Create a 3D model of a motor vehicle safety inspection zone, the core equipment showcase area. Include brake test platform with rollers, headlight tester, side-slip test platform, chassis inspection area, inspection line control screen, equipment status lights, floor lane markings, one staff member, and a vehicle. The model should feel realistic and trustworthy, like a modern vehicle inspection workshop, not a racing pit stop. Brake rollers, headlight tester, chassis scan line, car wheels, equipment lights, and staff should be separate animatable objects.

### 04 环保检测区

中文：

生成机动车环保检测区的 3D 模型，包括底盘测功机、尾气采样设备、排放分析仪、环保数据屏、采样管和车辆。需要体现尾气检测、排放数据采集和数据上传。采样管、测功机滚筒、数据屏和车辆需要作为独立对象，方便后续动画。

English:

Create a 3D model of an emission testing zone for vehicles, including chassis dynamometer, exhaust sampling device, emission analyzer, environmental data screen, sampling hose, and a vehicle. It should communicate exhaust testing, emission data collection, and data upload. The sampling hose, dynamometer rollers, data screen, and vehicle should be separate objects for later animation.

### 05 新能源检测区

中文：

生成新能源车辆检测区的 3D 模型，包括新能源专项检测工位、电池安全检测设备、高压检测设备、绝缘检测设备、诊断屏、工作人员和一辆可展示内部结构的新能源车。车辆需要支持车身局部透明，电池包、高压线束和检测连接线需要作为独立对象。风格要克制可信，不要过度科幻。

English:

Create a 3D model of a new energy vehicle inspection zone, including a dedicated inspection bay, battery safety testing equipment, high-voltage testing equipment, insulation testing device, diagnostic screen, one staff member, and an electric vehicle with visible internal structure. The vehicle should support partial transparent body visualization, with battery pack, high-voltage cables, and test connection lines as separate objects. Keep the style restrained and trustworthy, not overly futuristic.

### 06 数据中控区

中文：

生成智能检测站数据中控区的 3D 模型，包括中控室或中控墙、大型站长驾驶舱屏、AI 车况报告界面、工位状态屏、设备在线状态屏、数据流汇聚节点和操作台。整体像现代工业运营中心，干净、可信、B2B 科技感。大屏、数据流、报告卡片和状态面板需要作为可动画对象。

English:

Create a 3D model of the data control center of a smart inspection station, including a control room or dashboard wall, large station manager cockpit screen, AI vehicle condition report interface, workstation status screen, equipment online status panel, data flow convergence node, and operator desk. It should feel like a modern industrial operations center, clean, trustworthy, and B2B technology oriented. The large screens, data flows, report cards, and status panels should be animatable objects.

### 07 中央调度 / 数据核心

中文：

生成环形检测站中央调度 / 数据核心装置。它位于环形车辆路径中央，整体低矮，不能遮挡周围检测工位。可以是低矮的数据核心地台、环形 LED 地面或透明数据汇聚装置。需要支持数据线从各检测区汇入，再流向中控区。风格克制，不要像科幻反应堆。

English:

Create a central dispatch and data hub for a circular vehicle inspection station. It is located in the center of the ring-shaped vehicle path and should be low-profile, not blocking the surrounding inspection zones. It can be a low data platform, circular LED floor, or transparent data convergence device. It should support data lines flowing in from inspection zones and out to the control center. Restrained style, not like a sci-fi reactor.

## 生成顺序建议

建议不要一开始就生成完整大场景。更稳的顺序是：

1. 生成总场景参考图，确认整体环形布局和风格。
2. 生成环形站区地面和道路基础模型。
3. 生成入口 / 出口区。
4. 生成安全检测区。
5. 生成新能源检测区。
6. 生成数据中控区。
7. 生成公安信息化 / 联网核验区和环保检测区。
8. 生成中央调度 / 数据核心。
9. 最后统一材质、比例、灯光和命名。

## 质量检查清单

每次生成后需要检查：

- 是否一眼像机动车检测站。
- 建筑风格是否高级、干净、现代、可信。
- 是否只继承上一版的动线逻辑和舞台细节，而没有继承上一版不好看的建筑造型。
- 是否出现游乐园、主题园区、玩具城市、廉价展馆、临时展台或花哨异形屋顶；如果出现，视为错误结果。
- 是否有清晰入口、出口和车辆动线。
- 出口位置是否合理，是否真的能让车辆驶回城市道路。
- 地面箭头方向是否正确，入口箭头是否向内，出口箭头是否向外。
- 首页默认镜头里，出口驶离车辆是否车头朝向观众 / 画面下方，而不是车尾朝向观众。
- 入口等待车辆和出口驶离车辆是否形成相反朝向。
- 入口、出口、站内环形动线是否有颜色区分。
- 所有车辆车头方向是否与箭头和动线一致。
- 可读标识是否为中文；如果不是中文，是否应删除文字。
- 环形路径是否可理解。
- 设备是否像检测设备，而不是普通车库工具。
- 模型是否适合鸟瞰。
- 模型是否适合平视近景。
- 关键部件是否可拆分。
- 风格是否统一。
- 是否有过度科幻、过度玩具或过度赛车感。
- 是否给 UI 标签留下空间。

## 当前结论

AI 生成模型时，最重要的不是单张图好看，而是生成结果能服务后续滚动叙事：

- 车能沿环形路径一步步检测。
- 每个区域能独立被激活。
- 可动画部件能拆出来。
- 场景既能鸟瞰，也能进入接近平视的检测工位。
- 用户能看懂安车提供的是整站智能化解决方案。
