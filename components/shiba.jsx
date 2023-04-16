import { useCallback, useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

import { loadGLTFModel } from "../lib/model"
import { DogContainer, DogSpinner } from "./shiba-loader"

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const Shiba = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const refRenderer = useRef()
  const urlShibaGLB = "/shiba.glb"

  // 在視窗大小改變時更新畫布(canvas)的尺寸(用於初始渲染時掛到 windows 的 event listener)
  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight
      console.log(scW)
      renderer.setSize(scW, scH)
    }
  }, [])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container) {
      // 取得容器的寬和高，用來設定渲染器的大小。
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      })
      renderer.setPixelRatio(window.devicePixelRatio) // 設定渲染器的像素比例為裝置的像素比例，以使渲染的畫面更加清晰。
      renderer.setSize(scW, scH) // 設定渲染器的大小為容器的寬和高。
      renderer.outputEncoding = THREE.sRGBEncoding // 設定渲染器的輸出編碼方式為sRGB編碼，以提高渲染畫面的色彩精度。
      container.appendChild(renderer.domElement) // 將渲染器的 DOM 元素(canvas) 添加到容器中，以便在網頁上顯示渲染畫面。
      refRenderer.current = renderer // 渲染器的參照存入 useRef 中的 current 屬性中，以方便在後續使用中引用。

      const scene = new THREE.Scene() // 創建了一個場景
      const target = new THREE.Vector3(0, -0.2, 0) // 創建了一個目標點，用來指定相機的觀察目標
      const initialCameraPosition = new THREE.Vector3( // 創建了一個初始相機位置
        50 * Math.sin(0.2 * Math.PI),
        10,
        50 * Math.cos(0.2 * Math.PI),
      )

      const scale = scH * 0.0005 + 2.4
      const camera = new THREE.OrthographicCamera( // 創建了一個正交相機
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000,
      )
      camera.position.copy(initialCameraPosition) // 設置相機的位置為 initialCameraPosition
      camera.lookAt(target) // 設置相機的觀察目標為 target

      // 創建了一個環境光，並將其加入到場景中
      const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
      scene.add(ambientLight)

      // 創建了一個軌道控制器，使用上述的相機和 renderer 的 dom 元素作為參數。並設置自動旋轉和觀察目標為 target
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target

      // 加載 glTF 模型，並在模型加載完畢後調用 animate 函数和設置 loading 為 false
      loadGLTFModel(scene, urlShibaGLB, {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate()
        setLoading(false)
      })

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)
        frame = frame <= 100 ? frame + 1 : frame

        // 在前 100 幀中，相機會繞著目標旋轉，而在 100 幀後則啟用 OrbitControls。
        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20
          camera.position.y = 10
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        // 最後，每一幀都使用 renderer 對場景進行渲染。
        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req) // 取消前面使用 requestAnimationFrame() 設定的循環回調
        renderer.domElement.remove() // 從 DOM 樹中刪除畫布元素，這樣可以釋放占用的 DOM 資源。
        renderer.dispose() // 釋放使用的渲染器資源，包括畫布、紋理等。這樣可以釋放占用的內存，避免內存泄漏問題。
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false)
    return () => {
      window.removeEventListener("resize", handleWindowResize, false)
    }
  }, [handleWindowResize])

  return (
    // 還在載 model 的話就呈現轉圈圈的載入畫面
    <DogContainer ref={refContainer}>{loading && <DogSpinner />}</DogContainer>
  )
}

export default Shiba
