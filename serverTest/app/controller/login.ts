// @ts-ignore
import { Controller } from "egg";

export default class LoginController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.header = {
      "content-type": "application/json",
    };
    const result = {
      code: 200,
      result: {},
      message: "登录成功",
    };
    ctx.body = result;
  }
}
